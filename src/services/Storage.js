import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Database from "./Database";

const storage = getStorage()

class Storage {
	constructor(Storage) {
		this.storage = storage;
	}

	async setUserImg(uid, img) {
		try {
			const result = await uploadBytes(ref(this.storage, `/users/${uid}/profile`), img).then((e) => {
				getDownloadURL(e.ref).then((res) => {
					Database.updateUserData(uid, {
						imgProfile: res
					})
				})
			})
			return result
		} catch (error) {
			return error
		}
	}

	async uploadFile(uid, file) {
		try {
			const result = await uploadBytes(ref(this.storage, `/users/${uid}/${file.name}`), file);
			return result
		} catch (error) {
			return error
		}
	}

}

export default new Storage