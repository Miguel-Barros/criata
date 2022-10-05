import { getStorage, ref } from "firebase/storage";

const storage = getStorage()
const usersRef = ref(storage, '/users')

class Storage {
	constructor(Storage){
		this.storage = storage;
	}

	async setUserImg(uid, img){
		try {
			const result = await uploadBytes(usersRef, `/${uid}/${img}`).then((e) => {
				// Caso der certo
				return console.log(`O upload de ${img} de bom`)
			})
		} catch (error){
			return error
		}
	}
}

export default new Storage