import { getDatabase, ref, set, push, get, update, query, onValue } from "firebase/database";
import { getApp } from "firebase/app";
import Swal from "sweetalert2";

const app = getApp();
const database = getDatabase(app);

class Database {                                   // Criação da classe do banco de dados e exportação da mesma
    constructor(Database) {
        this.database = database;
    }

    async setData(dbRef, data) {                   // Inserção de novos dados na base de dados, utilizando como referência o caminho do dado e o dado em si
        try {
            await set(ref(this.database, dbRef), {
                ...data
            })
        } catch (error) {
            return error
        }
    }

    async getData() {                           // Obtenção de dados da base de dados toda, retornando todos os valos da base de dados
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

    async getUserData(uid) {                    // Obtenção de dados de usuario, utilizando como referência o UID unico gerado pelo firebase para aquele usuario
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

    async updateUserData(uid, data) {             // Atualização de dados de usuario, utilizando como referência o UID e o dado a ser atualizado
        try {
            await update(ref(this.database, `/users/${uid}/`), data)
            return update
        } catch (error) {
            return error
        }
    }
}

export default new Database