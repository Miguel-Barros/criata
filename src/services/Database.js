import { getDatabase, ref, set, push, get, query, onValue } from "firebase/database";
import { getApp } from "firebase/app";

const app = getApp();
const database = getDatabase(app);

class Database {
    constructor(Database) {
        this.database = database;
    }

    async setData(dbRef, data) {
        try {
            await set(ref(this.database, dbRef), {
                ...data
            })
        } catch (error) {
            return error
        }
    }

    async getData(uid, data){
        try {
            let result = await get(ref(this.database, `/users/${uid}/${data}`)).then( (item) => {
                if(item.exists()){
                    return item.val()
                }else {
                    alert('O dado requerido não foi encontrado')
                }
            })
            return result
        } catch (error) {
            return error
        }
    }
}

export default new Database