import { getDatabase, ref, set, push, get } from "firebase/database";
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

}

export default new Database