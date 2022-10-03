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

    async getData(data) {
        try {
            let result = await get(ref(this.database, `/users/`)).then((e) => {
                if (e.exists()) {
                    return Object.values(e.val())
                } else {
                    console.log('O dado requerido não foi encotrado')
                }
            })
            return result
        } catch (error) {
            return error
        }
    }

    async getUserData(uid) {
        try {
            let result = await get(ref(this.database, `/users/${uid}/`)).then((e) => {
                if (e.exists()) {
                    return e.val()
                } else {
                    console.log('Os dados requeridos não foram encotrados')
                }
            })
            return result
        } catch (error) {
            return error
        }
    }

    // async getUserData(uid) {
    //     try {
    //         const data = await get(ref(this.database, `/users/${uid}/`)).then((snapshot) => {
    //             if(snapshot.exists()){
    //                 return snapshot.toJSON()
    //             }else{
    //                 return console.log('Os dados requeridos não foram encontrados')
    //             }
    //         })
    //         return data
    //     } catch (error) {
    //         return error
    //     }
    // }
}

export default new Database