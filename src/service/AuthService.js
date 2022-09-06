import { getApp } from "firebase/app";
import {
	signInWithPopup,
	getAuth,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword
} from "firebase/auth";

class AuthService {
	constructor(firebaseApp) {
		this.auth = getAuth(firebaseApp);
	}

	waitForUser(callback) {
		return onAuthStateChanged(this.auth, (userCred) => {
			callback(userCred);
		});
	}

	async loginWithGoogle() {
		try {
			const userCred = await signInWithPopup(this.auth, new GoogleAuthProvider());
			return {
				user: userCred.user,
			};
		} catch (error) {
			return {
				error: error.message,
			};
		}
	}

	async signInWithEmailAndPassword(email, password) {
		try {
			const userCred = await signInWithEmailAndPassword(this.auth, email, password);
			return {
				user: userCred.user,
			};
		} catch (error) {
			return {
				error: error.message,
			};
		}
	}

	async createUserWithEmailAndPassword(email, password) {
		try {
			const userCred = await createUserWithEmailAndPassword(this.auth, email, password);
			return {
				user: userCred.user,
			};
		} catch (error) {
			return {
				error: error.message,
			};
		}
	}

	async logout() {
		await signOut(this.auth);
	}
}

export default new AuthService(getApp());