import { createContext, useContext, useState } from "react";
import AuthService from "../services/AuthService";
import Swal from "sweetalert2";

const authContext = createContext();


function ifError(error) {
	switch (error.code) {
		case "auth/invalid-email":
			Swal.fire({
				icon: "error",
				title: "Email invalido",
				text: "Parece que você inseriu um email invalido, tente novamente!",
				showConfirmButton: false,
				timer: 5000
			})
			break;
		case "auth/user-not-found":
			Swal.fire({
				icon: "error",
				title: "Usuario não encontrado",
				text: "Parece que você inseriu um email inexistente, tente novamente!",
				showConfirmButton: false,
				timer: 5000
			})
			break;
		case "auth/wrong-password":
			Swal.fire({
				icon: "error",
				title: "Senha incorreta",
				text: "Parece que você inseriu uma senha incorreta, tente novamente!",
				showConfirmButton: false,
				timer: 5000
			})
			break;
		case "auth/weak-password":
			Swal.fire({
				icon: "error",
				title: "Senha muito fraca",
				text: "Parece que você inseriu um fraca invalido, insira uma senha com pelo menos 6 digitos!",
				showConfirmButton: false,
				timer: 5000
			})
			break;
		case "auth/email-already-in-use":
			Swal.fire({
				icon: "error",
				title: "Email já utilizado",
				text: "Parece que esse email já está em uso, verifique se o email está correto ou tente fazer login!",
				showConfirmButton: false,
				timer: 5000
			})
			break;
		case "auth/network-request-failed":
			Swal.fire({
				icon: "error",
				title: "Conexão instável",
				text: "Verifique a sua conexão com a internet, tente novamente!",
				showConfirmButton: false,
				timer: 5000
			})
			break;
		default:
			return
	}
}

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	async function loginWithEmailAndPassword(email, password) {
		const { error, user } = await AuthService.loginWithEmailAndPassword(email, password);
		if (email === "" || email == null || password == "" || password == null) {
			return Swal.fire({
				icon: "error",
				title: "Preencha os campos",
				text: "Parece que você não preencheu todos os campos, tente novamente!",
				showConfirmButton: false,
				timer: 5000
			})
		}

		if (error) {
			ifError(error)
		} else {
			setUser(user ?? null);
			setError(error ?? "");
		}
	}

	async function loginWithGoogle() {
		const { error, user } = await AuthService.loginWithGoogle();
		setUser(user ?? null);
		setError(error ?? "");
	}

	async function signUpWithEmailAndPassword(name, email, password, cpassword) {
		if (email === "" || email == null || password == "" || password == null || cpassword == "" || cpassword == null || name == "" || name == null) {
			return Swal.fire({
				icon: "error",
				title: "Preencha os campos",
				text: "Parece que você não preencheu todos os campos, tente novamente!",
				showConfirmButton: false,
				timer: 5000
			})
		} else {
			if (password != cpassword) {
				return Swal.fire({
					title: "As senhas não coincidem",
					text: "Parece que você inseriu duas senhas diferentes, tente novamente!",
					showConfirmButton: false,
					timer: 5000,
					icon: "error"
				})
			} else {
				const { error, user } = await AuthService.createUserWithEmailAndPassword(email, password);
				if (error) {
					ifError(error)
				} else {
					Swal.fire({
						title: "Você foi cadastrado com sucesso!",
						text: `Seja bem vindo ${name}`,
						showConfirmButton: false,
						timer: 5000,
						icon: "success"
					})
				}
			}
		}
	}

	async function logout() {
		await AuthService.logout();
		setUser(null);
	}

	const value = {
		user, error, logout, setUser, setError,
		loginWithGoogle, loginWithEmailAndPassword,
		signUpWithEmailAndPassword
	};

	return <authContext.Provider value={value} {...props} />;
}
