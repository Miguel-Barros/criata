import { async } from '@firebase/util';
import firebase from 'firebase/app'
import 'firebase/auth'

const AuthService = {
    loginWithGoogle: async() => {
        const provider = new firebase.auth.GoggleAuthProvider();
        try {
            const userCred = await firebase.auth().signInWithPopip(provider);
            return {
                user: userCred,
            };
        } catch (e) {
            return {
                error: e.message,
            };
        }
    },
    logout : async () => {
        await firebase.auth().signOut();
    },
};