import styles from './styles/Nav.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2';
import useAuth from "../hook/auth";
import Database from "../services/Database"
import Router from 'next/router';
import { useState, useEffect } from 'react';

import { Search } from '../services/SearchService';


export default function Nav(props) {
    const { user } = useAuth();
    const [userData, setUserData] = useState([])
    const [formatName, setFormatName] = useState('')
    const [searchContent, setSearchContent] = useState('')

    useEffect(() => {
        Database.getUserData(user.uid).then((e) => {
            setUserData(e)
        })

    }, [])

    useEffect(() => {
        const firstName = userData?.fullName?.split(" ")[0];
        const lastName = userData?.fullName?.split(" ")[((userData?.fullName?.split(' ').length) - 1)]
        setFormatName(`${firstName ?? '...'} ${lastName ?? '...'}`)

    }, [userData])

    return (
        <>
            <header className={styles.header}>
                <span className={styles.left}>
                    <Link href={'/'}>
                        <span className={styles.logo}>
                            <img src="./assets/components/criata_logo.svg" alt="criata-logo" />
                            <p>Criata</p>
                        </span>
                    </Link>
                </span>
                <span className={styles.right}>
                    <span className={styles.box}>
                        <Link href={'/settings'}>
                            <Icon icon={'mdi:cog-outline'} className={styles.icons} />
                        </Link>
                        <span className={styles.edit}>
                            <Link href={'/profile'}>
                                <p>{formatName ?? '...'}</p>
                            </Link>
                            <Link href={'/profile'}>
                                {(userData?.imgProfile) ?
                                    <img src={userData.imgProfile} className={styles.profile} />
                                    :
                                    <Icon icon={'mdi:account-circle'} className={styles.profile} />
                                }
                            </Link>
                        </span>
                        <span className={styles.split} />
                        <input type="text" placeholder={'Buscar'} className={styles.search} onChange={(e) => setSearchContent(e.target.value)} value={searchContent} />
                        <Icon icon={'mdi:magnify'} className={styles.search_icon} onClick={() => Search(searchContent)} />
                    </span>
                </span>
            </header>
        </>
    )
}
