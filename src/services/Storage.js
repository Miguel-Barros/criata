import { getStorage, ref, put} from "firebase/storage";

const storage = getStorage()
const usersRef = ref(storage, '/users/')

class Storage {
	constructor(Storage){
		this.storage = storage;
	}

	async setUserImg(uid, img){
		try {
			const result = await this.storage.ref().put(img)
			return alert('Cavalo')
		} catch (error){
			return error
		}
	}
}

export default new Storage