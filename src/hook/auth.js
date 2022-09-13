import { createContext, useContext, useState } from "react";
import AuthService from "../services/AuthService";

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

	async function logout() {
		await AuthService.logout();
		setUser(null);
	}

	const value = {
		user, error, logout, setUser, setError,
		loginWithGoogle,
	};

	return <authContext.Provider value={value} {...props} />;
}