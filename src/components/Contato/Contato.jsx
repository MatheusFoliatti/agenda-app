import React from "react";

import style from "./Contato.module.css";

export function Contato({ name, number, email, icon }) {
	return (
		<>
			<div className={style.list}>
				<div className={style.card}>
					<img className={style.icon} src={icon} alt="icon" />
				</div>
				<div className={style.contact}>
					<p className={style.p1}>{name}</p>
					<p className={style.p2}>{number}</p>
					<p className={style.p2}>{email}</p>
				</div>
			</div>
		</>
	);
}
