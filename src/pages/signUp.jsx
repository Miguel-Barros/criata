import Head from "next/head";
import Link from "next/link";
import Support from "../component/support";
import { Icon } from "@iconify/react";
import styles from "../styles/SignUp.module.css";
import Database from "../services/Database";
import { withPublic } from "../hook/route";
import { useState, useEffect, useLayoutEffect, createRef } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

function SignUp({ auth }) {
  const [name, setName] = useState("");
  const [verify, setVerify] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const recaptchaRef = createRef();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) return null;
    recaptchaRef.current.reset();
    signUpWithEmailAndPassword(name, username, email, password, cpassword);
  };

  const { signUpWithEmailAndPassword } = auth;

  const [visible, isVisible] = useState(false);

  function setVisible() {
    const pass = document.querySelector("#password");
    const cpass = document.querySelector("#cpassword");
    const eye = document.querySelector("#eye");

    if (visible == false) {
      pass.setAttribute("type", "text");
      cpass.setAttribute("type", "text");
      isVisible(true);
    } else {
      pass.setAttribute("type", "password");
      cpass.setAttribute("type", "password");
      isVisible(false);
    }
  }

  const [username, setUsername] = useState("");

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[name.split(" ").length - 1];

  useLayoutEffect(() => {
    verify?.forEach((obj) => {
      if (obj.username == username) {
        setUsername(username + Math.floor(Math.random() * 9));
        return;
      }
    });
  });

  useEffect(() => {
    if (name.split(" ").length > 1) {
      setUsername(("@" + firstName + lastName).toLowerCase());
    } else {
      setUsername(("@" + firstName).toLowerCase());
    }
  }, [name]);

  useEffect(() => {
    Database.getData().then((e) => {
      setVerify(e);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Criata - Cadastrar</title>
      </Head>
      <main
        className={styles.main}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="350"
        data-aos-offset="100"
      >
        <Support />
        <img
          className={styles.ilus_bg}
          src="./assets/images/signUp/ilus-bg.svg"
          alt="ilustration-bg"
        />
        <img
          className={styles.ilus}
          src="./assets/images/signUp/ilus.svg"
          alt="ilustration"
        />
        <form
          className={styles.box}
          onSubmit={(e) => {
            e.preventDefault();
            recaptchaRef.current.execute();
          }}
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <h1 className={styles.title}>Cadastre-se</h1>
          <input
            type="text"
            placeholder="Nome Completo"
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="E-mail"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {visible ? (
            <Icon
              icon={"mdi:eye"}
              className={styles.eye}
              onClick={() => setVisible()}
            />
          ) : (
            <Icon
              icon={"mdi:eye-off"}
              className={styles.eye}
              onClick={() => setVisible()}
            />
          )}
          <input
            maxLength={16}
            type="password"
            id={"password"}
            placeholder="Senha"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            maxLength={16}
            type="password"
            id={"cpassword"}
            placeholder="Confirmar senha"
            className={styles.input}
            onChange={(e) => setCPassword(e.target.value)}
            value={cpassword}
          />
          <button type="submit" className={styles.btn}>
            Criar conta
          </button>
          <Link href="/signIn">
            <h3 className={styles.forgot}>Já possui uma conta?</h3>
          </Link>
        </form>
        <p className={styles.copyright}>Coaraci © 2022</p>
      </main>
      <ReCAPTCHA
        size="invisible"
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
        className={styles.recaptcha}
      />
    </div>
  );
}

export default withPublic(SignUp);
