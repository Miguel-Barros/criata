import { createContext, useContext, useState } from "react";
import AuthService from "../service/AuthService";

const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	async function loginWithGoogle() {
		const { error, user } = await AuthService.loginWithGoogle();
		setUser(user ?? null);
		setError(error ?? "");
	}

	async function loginWithGithub() {
		const { error, user } = await AuthService.loginWithGithub();
		setUser(user ?? null);
		setError(error ?? "");
	}

	async function logout() {
		await AuthService.logout();
		setUser(null);
	}

	async function signInWithEmailAndPassword(email, password) {
		if(email == null | email == ''){
			alert('Insira um email válido')
			return
		}else if(password == null | password == ''){
			alert('Insira uma senha válida')
			return
		}

		const { error, user } = await AuthService.signInWithEmailAndPassword(email, password);
		setUser(user ?? null);
		setError(error ?? "");
	}

	async function createUserWithEmailAndPassword(email, password) {
		if(email == null | email == ''){
			alert('Insira um email válido')
			return
		}else if(password == null | password == ''){
			alert('Insira uma senha válida')
			return
		}

		const { error, user } = await AuthService.createUserWithEmailAndPassword(email, password);
		setUser(user ?? null);
		setError(error ?? "");
	}

	const value = {
		user, error,
		loginWithGoogle,
		loginWithGithub,
		signInWithEmailAndPassword,
		createUserWithEmailAndPassword,
		logout,
		setUser
	};

	return <authContext.Provider value={value} {...props} />;
}