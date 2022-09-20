import { createContext, useContext, useState } from "react";
import AuthService from "../services/AuthService";
import styles from "../component/styles/Alert.module.css"
import swal from "sweetalert";

const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	async function loginWithEmailAndPassword(email, password) {
		if(email == null | email == ''){
			swal({
				icon: 'error',
				title: 'Insira um email valido!',
				text: 'Parece que você preencheu o campo de email de forma incorreta, tente novamente',
				buttons: false,
				dangerMode: true,
				timer: 1000,
				className: `${styles.alert}`
			})
			return
		}else if(password == null | password == ''){
			swal({
				icon: 'error',
				title: 'Insira uma senha valida!',
				text: 'Parece que você preencheu o campo de email de forma incorreta, tente novamente',
				buttons: false,
				dangerMode: true,
				timer: 1000,
				className: `${styles.alert}`
			})
			return
		}

		const { error, user } = await AuthService.loginWithEmailAndPassword(email, password);
		setUser(user ?? null);
		setError(error ?? "");
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

{/* Alerta
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