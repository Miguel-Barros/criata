import { withProtected } from "../hook/route";
import styles from "../styles/Profile.module.css"
import Nav from "../component/nav"
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import Head from "next/head";
import Database from "../services/Database"
import { useState, useEffect } from 'react';
import EditProfile from "../component/editProfile";
import { Router, useRouter } from "next/router";
import Storage from "../services/Storage";
import { ProjectQR } from "../component/qrCode";

function Profile({ auth }) {
    const { user } = auth;
    const [userData, setUserData] = useState('')
    const [editProfile, setEditProfile] = useState(false)
    const [project, setProject] = useState()
    const router = useRouter()
    const [showQR, setShowQR] = useState(false)

    useEffect(() => {
        Database.getUserData(user.uid).then((e) => {
            setUserData(e)
        })

        Storage.getFile(user.uid, 'curriculo.png').then((e) => {
            setProject(e.code)
        })
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Perfil</title>
            </Head>
            <Nav />
            <img className={styles.background} src="./assets/images/team/bg.svg" alt="background" />
            <main className={styles.main}>
                <ProjectQR showing={showQR} onClose={() => setShowQR(false)} />
                <div className={styles.profile}>
                    {(userData?.imgProfile) ?
                        <img src={userData.imgProfile} className={styles.account_icon} />
                        :
                        <Icon icon={'mdi:account-circle'} className={styles.account_icon} />
                    }
                    <h2>{userData?.fullName ?? '...'}</h2>
                    <h3>{userData?.username ?? '...'}</h3>
                    <p>{userData?.bio ?? '...'}</p>
                </div>
                <div className={styles.content}>

                    <EditProfile isOpen={editProfile} onClose={() => setEditProfile(false)} />

                    <h1>Meus projetos</h1>
                    <span className={styles.buttons}>
                        <button className={styles.btn} onClick={() => setEditProfile(true)}>
                            <Icon className={styles.icon} icon={'mdi:edit-outline'} />Editar perfil</button>
                        <button disabled className={styles.btn} onClick={() => {
                        }}>
                            <Icon className={styles.icon} icon={'mdi:plus-circle-outline'} />Adicionar projeto</button>
                    </span>
                    <span className={styles.projects}>

                        {
                            (project == 'storage/object-not-found') ?
                                <div className={styles.project}>
                                    <button className={styles.btn} onClick={() => {
                                        router.push('/creation')
                                    }} style={{ marginTop: '50%' }}>Criar um novo</button>
                                </div>
                                :
                                <div className={styles.project}>
                                    <span>
                                        <Icon icon={'mdi:pencil-box-outline'} className={styles.icon} onClick={() => { }} />
                                        <Icon icon={'mdi:qrcode'} className={styles.icon} onClick={() => (showQR) ? setShowQR(false) : setShowQR(true)} />
                                    </span>
                                    <button className={styles.btn} onClick={() => {
                                        router.push(`/c/${userData?.username.replace("@", '')}`)
                                    }
                                    }>Visualizar</button>
                                </div>
                        }

                        <div aria-disabled aria-readonly className={styles.project}>
                        </div>
                        <div aria-disabled aria-readonly className={styles.project}>
                        </div>
                    </span>
                </div>
            </main>
        </div>
    )
}
export default withProtected(Profile);


// export async function getServerSideProps() {
//     const res = await fetch(`https://.../data`)
//     const data = await res.json()
//     return { props: { data } }
//   }
