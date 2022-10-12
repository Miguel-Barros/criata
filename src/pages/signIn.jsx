import Head from 'next/head';
import Link from 'next/link';
import Support from '../component/support';
import { Icon } from '@iconify/react';
import styles from '../styles/SignIn.module.css';
import { withPublic } from '../hook/route';
import { useState, useLayoutEffect } from 'react';

function SignIn({ auth }) {
    const { loginWithGoogle, loginWithEmailAndPassword } = auth;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, isVisible] = useState(false);

    function setVisible() {
        const pass = document.querySelector('#password')
        const cpass = document.querySelector('#cpassword')
        const eye = document.querySelector('#eye')

        if (visible == false) {
            pass.setAttribute('type', 'text')
            isVisible(true)
        } else {
            pass.setAttribute('type', 'password')
            isVisible(false)
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Criata - Logar</title>
            </Head>
            <main className={styles.main}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="350"
                data-aos-offset="100">
                <Support/>
                <form className={styles.box} onSubmit={(e) => e.preventDefault()}
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-delay="200"
                data-aos-duration="500">
                    <h1 className={styles.title}>Entrar</h1>
                    <input type="text" placeholder='E-mail' className={styles.input} onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    {visible ?
                        <Icon icon={'mdi:eye'} className={styles.eye} onClick={() => setVisible()} />
                        :
                        <Icon icon={'mdi:eye-off'} className={styles.eye} onClick={() => setVisible()} />
                    }
                    <input type="password" maxLength={16} id={'password'} placeholder='Senha' className={styles.input} onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <Link href='/forgot'>
                        <h3 className={styles.forgot}>Esqueceu a senha?</h3>
                    </Link>
                    <button className={styles.btn} onClick={() => loginWithEmailAndPassword(email, password)}>Entrar</button>
                    <Link href='/signUp'>
                        <h3 className={styles.forgot}>Ainda não tem uma conta?</h3>
                    </Link>
                    <span className={styles.split} />
                    <span className={styles.accounts}>
                        <img className={styles.icons} src="./assets/icons/google-icon.svg" onClick={() => loginWithGoogle(auth)} />
                        <img className={styles.icons} src="./assets/icons/facebook-icon.svg" />
                        <img className={styles.icons} src="./assets/icons/linkedin-icon.svg" />
                        <img className={styles.icons} src="./assets/icons/github-icon.svg" />
                    </span>
                </form>
            <p className={styles.copyright}>Coaraci © 2022</p>
            <img className={styles.ilus_bg} src="./assets/images/login/ilus-bg.svg" alt='ilustration-bg' />
            <img className={styles.ilus} src="./assets/images/login/ilus.svg" alt='ilustration' />
            </main >
        </div >
    );
}

export default withPublic(SignIn);