import { useEffect, useLayoutEffect, useState } from 'react'
import styles from './styles/editProfile.module.css'
import { Icon } from '@iconify/react';
import Database from '../services/Database'
import Storage from '../services/Storage'
import Swal from 'sweetalert2';

export default function editProfile(props) {
    const { user } = props.auth
    const [countChar, setChar] = useState(0)
    const [edit, setEdit] = useState(props.inEditing)
    const [userData, setUserData] = useState()

    const [verify, setVerify] = useState([])
    const [check, setCheck] = useState(false)

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [fullName, setFullName] = useState()
    const [bio, setBio] = useState()

    const [img, setImg] = useState(null)

    useEffect(() => {
        Database.getUserData(user.uid).then((e) => {
            setUserData(e)
        })

        Database.getData().then((e) => {
            setVerify(e)
        })
    }, [])

    useEffect(() => {
        setFullName(userData?.fullName)
        setUsername(userData?.username)
        setEmail(userData?.email)
        setBio(userData?.bio)
    }, [userData])

    useLayoutEffect(() => {
        if (username) {
            setUsername(username.replace(/\s+/g, ''))
            setUsername(username.replace(/[^a-z0-9]/gi, "").toLowerCase())
        }
    }, [username])

    function Update() {
        if ("@" + username == userData.username && email == userData.email && fullName == userData.fullName && bio == userData.bio && (!img)) {
            Swal.fire({
                icon: 'warning',
                title: 'Sem alterações',
                text: 'Faça alguma alteração para conseguir editar seu perfil',
                showConfirmButton: false,
                timer: 3000
            })
        } else {
            verify.forEach((e) => {
                if (!check) {
                    if ("@" + username == e.username && "@" + username != userData.username) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Usuario já utilizado',
                            text: 'Esse nome de usuario já esta sendo utilizado',
                            showConfirmButton: false,
                            timer: 2500
                        })
                    }

                    if (email == e.email && email != userData.email) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Email já utilizado',
                            text: 'Esse endereço de email já esta sendo utilizado',
                            showConfirmButton: false,
                            timer: 2500
                        })
                    }
                    return setCheck(true)
                } else {
                    (img) ? Storage.setUserImg(user.uid, img) : null;
                    Database.updateUserData(user.uid, {
                        'username': "@" + username,
                        'email': email,
                        'bio': bio,
                        'fullName': fullName,
                    }).then(async () => {
                        await Swal.fire({
                            icon: 'success',
                            title: 'Seu perfil foi editado com sucesso',
                            showConfirmButton: false,
                            timer: 2500
                        })
                        window.location.reload();
                    })
                    setCheck(false)
                }

            })


        }
    }

    useLayoutEffect(() => {
        setChar(bio?.length)
    }, [bio])

    function showChangeImg() {
        document.querySelector('#changeImg').click()
    }

    function handleChangeImg() {
        if (!img) {
            if (userData?.imgProfile) {
                return (
                    <>
                        <img src={userData.imgProfile} className={styles.account_icon} alt='profile-img' />
                        <span className={styles.blur} onClick={() => showChangeImg()} />
                        <Icon icon={'mdi:square-edit-outline'} className={styles.icon_edit} onClick={() => showChangeImg()} />
                        <input type={"file"} name={`${user.uid}-profileIcon`} id={'changeImg'} accept="image/png, image/jpeg" title=" " onChange={(e) => setImg(e.target.files[0])} />
                    </>
                )
            } else {
                return (
                    <>
                        <Icon icon={'mdi:account-circle'} className={styles.account_icon} onClick={() => showChangeImg()} />
                        <span className={styles.blur} />
                        <Icon icon={'mdi:square-edit-outline'} className={styles.icon_edit} onClick={() => showChangeImg()} />
                        <input type={"file"} name={`${user.uid}-profileIcon`} id={'changeImg'} accept="image/png, image/jpeg" title=" " onChange={(e) => setImg(e.target.files[0])} />
                    </>
                )
            }
        } else {
            return (
                <>
                    <img src={URL.createObjectURL(img)} alt="profile-img" className={styles.account_icon} />
                    <span className={styles.blur} onClick={() => showChangeImg()} />
                    <Icon icon={'mdi:square-edit-outline'} className={styles.icon_edit} onClick={() => showChangeImg()} />
                    <input type={"file"} name={`${user.uid}-profileIcon`} id={'changeImg'} accept="image/png, image/jpeg" title=" " onChange={(e) => setImg(e.target.files[0])} />
                </>
            )
        }
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
                        <h3>{"@" + username}</h3>
                        <span>
                            {(img) ? handleChangeImg() : handleChangeImg()}
                        </span>
                        <h3>{`Ultimo acesso em: ${userData?.lastAcess}`}</h3>
                    </div>
                    <div className={styles.right}>
                        <span>
                            <p>Nome Completo</p>
                            <input type="text" placeholder='Insira seu nome completo' onChange={(e) => setFullName(e.target.value)} value={fullName} maxLength={61} />
                            <p>Nome de usuario</p>
                            <input type="text" placeholder='Insira seu nome de usuario' onChange={(e) => setUsername(e.target.value)} value={"@" + username} maxLength={27} />
                            <p>Email</p>
                            <input type="text" placeholder='Insira seu email' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </span>
                        <span>
                            <p>Biografia</p>
                            <p>Caracteres: {countChar}</p>
                            <textarea maxLength={440} placeholder='Insira sua biografia' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                        </span>
                        <span>
                            <button onClick={() => setEdit(false)}>Cancelar</button>
                            <button onClick={() => Update()}>Editar perfil</button>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}