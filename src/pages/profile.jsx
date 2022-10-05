import { withProtected } from "../hook/route";
import styles from "../styles/Profile.module.css"
import Nav from "../component/nav"
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import Head from "next/head";
import Database from "../services/Database"
import { useState, useEffect } from 'react';
import EditProfile from "../component/editProfile";

function Profile({ auth }) {
    const { user } = auth;
    const [userData, setUserData] = useState('')
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        Database.getUserData(user.uid).then((e) => {
            setUserData(e)
        })
    }, [])

    function Disabled() {
        Swal.fire({
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
            text: "Parece que essa função foi desabilitada por um desenvolvedor"
        })
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Perfil</title>
            </Head>
            <Nav />
            <img className={styles.background} src="./assets/images/team/bg.svg" alt="background" />
            <main className={styles.main}>
                <div className={styles.profile}>
                    <Icon icon={'mdi:account-circle'} className={styles.account_icon} />
                    <h2>{userData?.fullName ?? '...'}</h2>
                    <h3>{userData?.username ?? '...'}</h3>
                    <p>{userData?.bio ?? '...'}</p>
                </div>
                <div className={styles.content}>
                    {(edit) ? <EditProfile auth={auth} inEditing={edit} /> : ''}
                    <h1>Meus projetos</h1>
                    <span className={styles.buttons}>
                        <button className={styles.btn} onClick={() => {(edit) ? setEdit(false) : setEdit(true)}}>
                            <Icon className={styles.icon} icon={'mdi:edit-outline'} />Editar perfil</button>
                        <button disabled className={styles.btn} >
                            <Icon className={styles.icon} icon={'mdi:plus-circle-outline'} />Adicionar projeto</button>
                    </span>
                    <span className={styles.projects}>
                        <div className={styles.project}>
                            <span>
                                <Icon icon={'mdi:pencil-box-outline'} className={styles.icon} onClick={() => Disabled()} />
                                <Icon icon={'mdi:qrcode'} className={styles.icon} onClick={() => Disabled()} />
                            </span>
                            <button className={styles.btn} onClick={() => Disabled()}>Visualizar</button>
                        </div>
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
