import { createContext, useContext, useState } from "react";
import AuthService from "../services/AuthService";
import styles from "../component/styles/Alert.module.css"
import Swal from "sweetalert2";

const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	async function loginWithEmailAndPassword(email, password) {
		const { error, user } = await AuthService.loginWithEmailAndPassword(email, password);
		if( email === "" || email == null || password == "" || password == null){
			return Swal.fire({
				icon: "error",
				title: "Preencha os campos",
				text: "Parece que você não preencheu todos os campos, tente novamente!",
				showConfirmButton: false,
				timer: 5000
			})
		}
		
		if (error) {
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

	async function logout() {
		await AuthService.logout();
		setUser(null);
	}

	const value = {
		user, error, logout, setUser, setError,
		loginWithGoogle, loginWithEmailAndPassword
	};

	return <authContext.Provider value={value} {...props} />;
}

{/* alerta
	swal({
                        icon: 'error',
                        title: 'Login invalido',
                        text: 'Parece que você preencheu os campos de forma incorreta, tente novamente',
                        buttons: false,
                        dangerMode: true,
                        timer: 1000,
                        className: `${styles.alert}`
                    })
				*/}