import React, { useEffect, useState } from "react";
import styles from "./styles/StateChanged.module.css"

import useAuth from "../hook/auth";
import AuthService from "../services/AuthService";

export default function AuthStateChanged({ children }) {
    const { setUser }             = useAuth();
    const [loading, setLoading]   = useState(true);

    useEffect(() => {
        AuthService.waitForUser((userCred) => {
            setUser(userCred);
            setLoading(false);
        });
        //eslint-disable-next-line
    }, []);

    if (loading) {
        return (
            <>
                {/* Fazer um loading  */}
            </>
        )
    }

    return children;
}