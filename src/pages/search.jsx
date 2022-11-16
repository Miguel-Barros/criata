import Router from "next/router";
import Nav from "../component/nav";
import styles from "../styles/Search.module.css";
import Database from "../services/Database";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Head from "next/head";

export default function Search() {
  const query = Router.query.q;
  const [foundUsers, setFoundUsers] = useState([]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const founds = foundUsers.length;
  let lock = false;

  useEffect(() => {
    if (!lock) {
      lock = true;
      Database.getData().then((e) => {
        e.forEach((e) => {
          const fullName = e.fullName.toLowerCase().split(" ");
          const firstName = e.fullName.split(" ")[0].toLowerCase();
          const lastName = e.fullName
            .split(" ")
          [e.fullName.split(" ").length - 1].toLowerCase();
          const name = `${firstName} ${lastName}`;
          if (
            query == name ||
            query == lastName ||
            query == firstName ||
            query == e.username.replace("@", "") ||
            query == e.username ||
            query == e.email ||
            query == e.fullName.toLowerCase() ||
            fullName.includes(query.toLowerCase())
          ) {
            setFoundUsers((found) => [...found, e]);
          }
        });
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Criata - Search</title>
      </Head>
      <Nav />
      <main className={styles.main}>
        <span>
          <h2>
            Resultados de pesquisa por: <b>{query}</b>
          </h2>
          <h3>Foram encontrados {founds} usuarios</h3>
        </span>
        <div className={styles.cardGroup}>
          {foundUsers.map((user) => {
            return (
              <div className={styles.card} key={user?.username} onClick={
                () => {
                  Router.push({
                    pathname: "/profile/[profile]",
                    query: {profile: user?.username.replace("@", "")},
                  });
                }
              }>
                <div className={styles.header}>
                  <img src={user?.imgProfile} alt="profile-img" />
                  <p>
                    Ultimo acesso: <b>{user?.lastAcess}</b>
                  </p>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.fullName}>{user.fullName}</h3>
                  <p className={styles.bio}>{user.bio}</p>
                  <h3 className={styles.username}>{user.username}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
}

{
  /* <span className={styles.card}>
                            <h3 className={styles.name}>Sherek do Pantâno</h3>
                            <h3 className={styles.username}>@éosherekporra</h3>
                            <img className={styles.profile} src="https://st2.depositphotos.com/2557325/5432/i/600/depositphotos_54326397-stock-photo-shrek-at-madame-tussauds.jpg" alt="profile" />
                            <p className={styles.bio}> Shrek, um temido e aterrorizante ogro verde que ama a solidão em seu pântano, vê sua vida interrompida quando diversas criaturas de contos de fada.</p>
                        </span> */
}
