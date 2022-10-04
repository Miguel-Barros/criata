import { useEffect, useLayoutEffect, useState } from 'react'
import styles from './styles/editProfile.module.css'
import Database from '../services/Database'
import { Icon } from '@iconify/react';

export default function editProfile(props) {
    const { user } = props.auth
    const [countChar, setChar] = useState(0)
    const [edit, setEdit] = useState(props.inEditing)
    const [userData, setUserData] = useState()

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [fullName, setFullName] = useState()
    const [bio, setBio] = useState()

    useEffect(() => {
        Database.getUserData(user.uid).then((e) => {
            setUserData(e)
        })
    }, [])

    useEffect(() => {
        setFullName(userData?.fullName)
        setUsername(userData?.username)
        setEmail(userData?.email)
        setBio(userData?.bio)
    }, [userData])

    function update() {
        Database.updateUserData(user.uid, 'username', username)
    }

    if (edit) {
        return (
            <>
                <div className={styles.modal}
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="400"
                    data-aos-offset="50"
                >
                    <div className={styles.left}>
                        <h2>{fullName}</h2>
                        <h3>{username}</h3>
                        <Icon icon={'mdi:account-circle'} className={styles.account_icon} />
                        {/* <input type="file" accept=".png, .jpg, .jpeg" /> */}
                        <h3>Ultimo login: 30-30-2030 - 22:50</h3>
                    </div>
                    <div className={styles.right}>
                        <span>
                            <p>Nome Completo</p>
                            <input type="text" placeholder='Insira seu nome completo' onChange={(e) => setFullName(e.target.value)} value={fullName} maxLength={61}/>
                            <p>Nome de usuario</p>
                            <input type="text" placeholder='Insira seu nome de usuario' onChange={(e) => setUsername(e.target.value)} value={username} maxLength={27} />
                            <p>Email</p>
                            <input type="text" placeholder='Insira seu email' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </span>
                        <span>
                            <p>Biografia</p>
                            <p>Caracteres: {countChar}</p>
                            <textarea maxLength={453} placeholder='Insira sua biografia' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                        </span>
                        <span>
                            <button onClick={() => setEdit(false)}>Cancelar</button>
                            <button>Editar perfil</button>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}