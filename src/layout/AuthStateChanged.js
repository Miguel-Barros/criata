import React, { useEffect, useState } from "react";
import useAuth from "../hook/auth";
import AuthService from "../service/AuthService";
import styles from "./Loading.module.css"

export default function AuthStateChanged({ children }) {
	const { setUser } = useAuth();
	const [loading, setLoading] = useState(true);

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
				<div className={styles.container}>
					<img className={styles.loading} src="https://miro.medium.com/max/1400/1*JWRrHmGBM_DxatdKk6qBnA.gif" />
				</div>
			</>
		)
	}

	return children;
}