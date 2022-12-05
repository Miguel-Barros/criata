import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Nav from "../../component/nav";
import styles from "./styles/FoundProfile.module.css";
import { withProtected, withPublic } from "../../hook/route";
import { Icon } from "@iconify/react";
import Database from "../../services/Database";

function Profile({ auth }) {
    const router = useRouter()
    const { profile } = router.query;
    const [usersData, setUsesrData] = useState([])
    const [userData, setUserData] = useState([])
    const { user } = auth;

    useEffect(() => {
        Database.getData().then((e) => {
            setUsesrData(e)
        })
    }, [])

    useEffect(() => {
        usersData.forEach((user) => {
            if (user.username === '@' + profile) {
                setUserData(user)
            }
        })
    }, [usersData])

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - @{profile}</title>
            </Head>
            <Nav />
            <main className={styles.main}>
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
                    <h1>Projetos de {userData?.fullName?.split(' ')[0]}</h1>
                    <span className={styles.projects}>
                        <div className={styles.project}>
                            <h3>Curriculo</h3>
                            <button className={styles.btn}>Visualizar</button>
                        </div>
                        <div aria-disabled aria-readonly className={styles.project}>
                        </div>
                        <div aria-disabled aria-readonly className={styles.project}>
                        </div>
                    </span>
                </div>
                <img className={styles.background} src="../assets/images/team/bg.svg" alt="background" />
            </main>
        </div>
    )
}

export default withPublic(Profile)