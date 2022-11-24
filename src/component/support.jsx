import Link from 'next/link'
import { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './styles/Support.module.css'
import emailjs from 'emailjs-com';

export default function Support() {
    return (
        <>
            <Link href='/support'>
                <img className={styles.icon} src="./assets/images/support/icon.svg" />
            </Link>
        </>
    )
}

function SupportModal({ showing, setShowing }) {
    if (!showing) return null;

    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [name, setName] = useState('')

    const handleSubmit = async (form) => {
        form.preventDefault();
        if (name == '' || email == '' || question == '') {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos!',
                timer: 2500,
                timerProgressBar: true,
                showConfirmButton: false,
                customClass: {
                    container: styles.swal
                }
            })
        } else {
            document.querySelector('#sendButton').disabled = true;
            await emailjs.send("service_jskn4fq", "template_0x72ssq", {
                from_name: (name.split(" ").length > 1) ? `${name.split(" ")[0]} ${name.split(" ")[name.split(" ").length - 1].charAt(0)}.` : name.split(" ")[0],
                from_email: email,
                message: question,
            }, 'BI4L906VBcTuOvI7E').then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Sucesso!',
                    text: 'Sua mensagem foi enviada com sucesso!',
                    timer: 2500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    customClass: {
                        container: styles.swal
                    }
                })
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocorreu um erro ao enviar sua mensagem!',
                    timer: 2500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    customClass: {
                        container: styles.swal
                    }
                })
            })
            return setShowing();
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.left}>
                    <h2>Formulario de contato</h2>
                    <img src="./assets/components/ilus-modal-support.svg" alt="" />
                    <p>Para que possamos te ajudar, preencha o formulário abaixo com o máximo de detalhes possíveis.</p>
                </div>
                <div className={styles.right}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                        <textarea id="" cols="30" rows="10" placeholder='Questão' onChange={(e) => setQuestion(e.target.value)}></textarea>
                        <span>
                            <button onClick={() => setShowing(false)}>Cancelar</button>
                            <button id={'sendButton'}>Enviar</button>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { SupportModal }