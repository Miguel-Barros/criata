import styles from './styles/SideNav.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function SideNav() {

    const router = useRouter()

    useEffect(() => {
        const links = document.querySelectorAll(`li`)
        links.forEach((e) => {
            if (router.pathname.replace('/', '') === e.id) {
                e.classList.add(styles.active)
            }
        })
    }, [])

    return (
        <nav className={styles.navigation}>
            <ul>
                <li id={'support'}><Link href={'/support'}>
                    <Icon icon="iconoir:question-mark-circle" className={styles.icon} />
                </Link></li>
                <li id={''}><Link href={'/'}>
                    <Icon icon="iconoir:home" className={styles.icon} />
                </Link></li>
                <li id={'about'}><Link href={'/about'}>
                    <Icon icon="iconoir:group" className={styles.icon} />
                </Link></li>
            </ul>
        </nav>
    )
}