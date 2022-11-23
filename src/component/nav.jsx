import styles from "./styles/Nav.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import useAuth from "../hook/auth";
import Database from "../services/Database";
import Router from "next/router";
import { useState, useEffect } from "react";

import { Search } from "../services/SearchService";

export default function Nav(props) {
  const { user } = useAuth();
  const [userData, setUserData] = useState([]);
  const [formatName, setFormatName] = useState("");
  const [searchContent, setSearchContent] = useState("");

  useEffect(() => {
    Database.getUserData(user.uid).then((e) => {
      setUserData(e);
    });
  }, []);

  useEffect(() => {
    if (userData?.fullName?.split(" ").length > 1) {
      setFormatName(`${userData?.fullName?.split(" ")[0]} ${userData?.fullName?.split(" ")[userData?.fullName?.split(" ").length - 1].charAt(0)}.`);
    } else {
      setFormatName(userData?.fullName?.split(" ")[0])
    }
  }, [userData]);

  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <span className={styles.left}>
            <img src="../assets/components/criata_logo.svg" alt="logo" />
            <h2>Criata</h2>
          </span>
        </Link>
        <span className={styles.right}>
          <span className={styles.settings}>
            <Icon
              className={styles.icon}
              icon="mdi:settings-outline"
              onClick={() => Router.push("/settings")}
            />
            <p
              className={styles.username}
              onClick={() => Router.push("/profile")}
            >
              {formatName}
            </p>
            {userData?.imgProfile ? (
              <img
                src={userData.imgProfile}
                alt="profile"
                onClick={() => Router.push("/profile")}
                className={styles.profile}
              />
            ) : (
              <Icon icon={"mdi:account-circle"} className={styles.profile} />
            )}
          </span>
          <span className={styles.split}></span>
          <span className={styles.search}>
            <form
              onSubmit={(e) => {
                Search(searchContent);
                e.preventDefault();
              }}
            >
              <Icon
                icon={"mdi:magnify"}
                className={styles.icon}
                onClick={() => Search(searchContent)}
              />
              <input
                type="text"
                placeholder={"Buscar"}
                className={styles.input}
                onChange={(e) => setSearchContent(e.target.value)}
                value={searchContent}
              />
            </form>
          </span>
        </span>
      </nav>
    </header>
  );
}
