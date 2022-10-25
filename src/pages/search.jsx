import Router from 'next/router'
import Nav from '../component/nav'
import styles from '../styles/Search.module.css'
import Database from '../services/Database'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function Search() {
    const query = Router.query.q
    const [foundUsers, setFoundUsers] = useState([])

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })

    useEffect(() => {
        Database.getData().then((e) => {
            e.forEach((e) => {
                const firstName = e.fullName.split(' ')[0].toLowerCase()
                const lastName = e.fullName.split(' ')[e.fullName.split(' ').length - 1].toLowerCase()
                const name = `${firstName} ${lastName}`
                if (query == name || query == lastName || query == firstName || 
                    query == e.username.replace('@', '') || query == e.username || query == e.email) {
                    setFoundUsers((found) => [...found, e])
                }
            })
        })
    }, [])

    return (
        <div className={styles.container}>
            <Nav />
            <main className={styles.main}>
                <h2>{foundUsers.length} {(foundUsers.length > 1) ? 'usuários' : 'usuário'} encontrados</h2>
                <div className={styles.cardGroup}>
                    <span className={styles.row4}>
                        {foundUsers.map((e, index) => {
                            return (
                                <span className={styles.card} key={index}>
                                    <h3 className={styles.name}>{`${e.fullName.split(' ')[0]} ${e.fullName.split(' ')[e.fullName.split(' ').length - 1]}`}</h3>
                                    <h3 className={styles.username}>{e.username}</h3>
                                    <img className={styles.profile} src={e.imgProfile} />
                                    <p className={styles.bio}>{e.bio}</p>
                                </span>
                            )
                        })}
                        {/* <span className={styles.card}>
                            <h3 className={styles.name}>Sherek do Pantâno</h3>
                            <h3 className={styles.username}>@éosherekporra</h3>
                            <img className={styles.profile} src="https://st2.depositphotos.com/2557325/5432/i/600/depositphotos_54326397-stock-photo-shrek-at-madame-tussauds.jpg" alt="profile" />
                            <p className={styles.bio}> Shrek, um temido e aterrorizante ogro verde que ama a solidão em seu pântano, vê sua vida interrompida quando diversas criaturas de contos de fada.</p>
                        </span> */}
                    </span>
                </div>
            </main>
        </div>
    )
}