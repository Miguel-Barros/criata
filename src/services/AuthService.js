import { getApp } from "firebase/app";
import {
    signInWithPopup, onAuthStateChanged, sendPasswordResetEmail,
    updatePassword, reauthenticateWithCredential,
    getAuth, signOut,
    GoogleAuthProvider, EmailAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, sendEmailVerification
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

    async loginWithEmailAndPassword(email, password) {
        try {
            const userCred = await signInWithEmailAndPassword(this.auth, email, password);
            return {
                user: userCred.user,
            };
        } catch (error) {
            return {
                error
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
                error
            };
        }
    }

    async sendPasswordResetEmail(email) {
        try {
            const result = await sendPasswordResetEmail(this.auth, email)
            return {
                result
            }
        } catch (error) {
            return {
                error
            }
        }
    }

    async updatePassword(user, oldPassword, newPassword) {
        try {
            const userCred = await EmailAuthProvider.credential(user.email, oldPassword)
            const reAtuh = await reauthenticateWithCredential(user, userCred)
            const result = await updatePassword(user, newPassword)
            return {
                result
            }
        } catch (error) {
            return {
                error
            }
        }
    }

    async sendEmailVerification(user) { 

        const actionCodeSettings = {
            url: 'https://localhost:3000',
            handleCodeInApp: true,
        };

        try {
            const result = await sendEmailVerification(user, actionCodeSettings)
            return {
                result
            }
        } catch (error) {
            return {
                error
            }
        }
    }

    async logout() {
        await signOut(this.auth);
    }
}

export default new AuthService(getApp());