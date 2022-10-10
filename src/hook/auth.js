import { createContext, useContext, useState } from "react";
import AuthService from "../services/AuthService";
import Swal from "sweetalert2";
import Database from "../services/Database";

const authContext                     = createContext();

const Toast = Swal.mixin({
	toast                                : true,
	position                             : "top-end",
	showConfirmButton                    : false,
	timer                                : 3000,
	timerProgressBar                     : true,
})

function ifError(error) {
	switch (error.code) {
		case "auth/invalid-email":
			Toast.fire({
				icon                              : 'error',
				title                             : 'Email inválido',
				text                              : 'Insira um email válido'
			})
			break;
		case "auth/user-not-found":
			Toast.fire({
				icon                              : 'error',
				title                             : 'Credênciais inválidas',
				text                              : 'Usuario não encontrado	'
			})
			break;
		case "auth/wrong-password":
			Toast.fire({
				icon                              : 'error',
				title                             : 'Senha incorreta',
				text                              : 'Insira uma senha válida'
			})
			break;
		case "auth/weak-password":
			Swal.fire({
				icon                              : "error",
				title                             : "Senha muito fraca",
				text                              : "Parece que você inseriu uma senha muito fraca, insira uma senha com pelo menos 6 digitos!",
				showConfirmButton                 : false,
				timer                             : 5000
			})
			break;
		case "auth/email-already-in-use":
			Swal.fire({
				icon                              : "error",
				title                             : "Email já utilizado",
				text                              : "Parece que esse email já está em uso, verifique se o email está correto ou tente fazer login!",
				showConfirmButton                 : false,
				timer                             : 5000
			})
			break;
		case "auth/network-request-failed":
			Toast.fire({
				icon                              : "error",
				title                             : "Conexão instável",
				text                              : "Verifique a sua conexão com a internet, tente novamente!",
			})
			break;
		default                             : 
			return
	}
}

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser]                = useState(null);
	const [error, setError]              = useState("");

	async function loginWithEmailAndPassword(email, password) {
		const { error, user }               = await AuthService.loginWithEmailAndPassword(email, password);
		if (email === "" || email == null || password == "" || password == null) {
			return Toast.fire({
				icon                              : 'warning',
				title                             : 'Aviso',
				text                              : 'Preencha todos os campos'
			})
		}

		if (error) {
			ifError(error)
		} else {
			await Swal.fire({
				icon                              : "success",
				title                             : "Login efetuado com sucesso",
				text                              : "Seja bem vindo novamente",
				showConfirmButton                 : false,
				timer                             : 5000
			})
			setUser(user ?? null);
			setError(error ?? "");
		}
	}

	async function loginWithGoogle() {
		const { error, user }               = await AuthService.loginWithGoogle();
		setUser(user ?? null);
		setError(error ?? "");
	}

	async function signUpWithEmailAndPassword(name, username, email, password, cpassword) {
		if (email === "" || email == null || password == "" || password == null || cpassword == "" || cpassword == null || name == "" || name == null) {
			return Toast.fire({
				icon                              : 'warning',
				title                             : 'Aviso',
				text                              : 'Preencha todos os campos',
				position                          : 'top-start'
			})
		} else {
			if (password != cpassword) {
				Toast.fire({
					icon                             : 'error',
					title                            : 'Senhas diferentes',
					text                             : 'As senhas não coecidem',
					position                         : 'top-start'
				})
			} else {
				const { error, user }             = await AuthService.createUserWithEmailAndPassword(email, password);
				if (error) {
					ifError(error)
				} else {

					name = name.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
						return a.toUpperCase();
					});

					await Database.setData('/users/' + user.uid, {
						fullName                        : name,
						username                        : username,
						bio                             : "",
						email                           : email,
						verified                        : false
					})

					Toast.fire({
						icon                            : 'success',
						title                           : "Você foi cadastrado com sucesso",
						text                            : `Olá ${name.split(" ")[0]}, seja bem vindo`,
						position                        : 'top-start',
						timer                           : 5000
					})
				}
			}
		}



	}

	async function logout() {
		const d                             = new Date().toLocaleDateString('pt-BR');
		Database.updateUserData(user.uid, {
			lastAcess                          : d
		})
		
		await AuthService.logout();
		setUser(null);
		setError(null);
	}

	async function sendPasswordResetEmail(email){
		if(email == null || email == ''){
			Toast.fire({
				icon: 'warning',
				title: 'Informe seu email',
				text: 'Para que possamos redefinir sua senha, prencha o campo com o email registrado',
				timer: 5000
			})	
		}

		const {error, result} = await AuthService.sendPasswordResetEmail(email)
		if(error){
			ifError(error)
		}else{
			await Toast.fire({
				icon: 'success',
				title: 'Redefinição de senha',
				text: 'Foi enviado uma mensagem de redefinição, para o email informado',
				timer: 3500
			})
			window.location.href = "/signIn"
		}
	}

	async function updatePassword(user, oldPassword, newPassword, confirmPassword){

		if (oldPassword == '' || oldPassword == null || newPassword == '' || newPassword == null || confirmPassword == '' || confirmPassword == null) {
			Toast.fire({
				icon: 'warning',
				title: 'Preencha todos os campos',
				text: 'Para conseguimos alterar sua senha preencha todos os campos',
				timer: 3500
			})
			return
		}

		if (oldPassword == newPassword ) {
			Toast.fire({
				icon: 'error',
				title: 'Senha atual igual a nova senha',
				text: 'Sua nova senha não pode ser igual a sua senha antiga',
				timer: 3500
			})
			return
		}

		if (newPassword != confirmPassword) {
			Toast.fire({
				icon: 'warning',
				title: 'Suas novas senhas não coecidem',
				text: 'Confirme sua nova senha',
				timer: 3500
			})
			return
		}

		const {error, result} = await AuthService.updatePassword(user, oldPassword, newPassword)

		if(error){
			ifError(error)
		}else{
			await Toast.fire({
				icon: 'success',
				title: 'Senha alterada com sucesso',
				text: 'Sua senha foi alterada com sucesso',
				timer: 3500
			})
			await Swal.fire({
				icon: 'warning',
				title: 'Você sera deslogado',
				text: 'Para manter a segurança de sua conta, você sera deslogado.',
				timer: 5000,
				showConfirmButton: false
			})
			logout()
		}
	}

	const value = {
		user, error, logout, setUser, setError,
		loginWithGoogle, loginWithEmailAndPassword,
		signUpWithEmailAndPassword, sendPasswordResetEmail,
		updatePassword
	};

	return <authContext.Provider value   = {value} {...props} />;
}
