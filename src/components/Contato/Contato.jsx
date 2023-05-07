import React from "react";

import { Filter } from "../Filter/Filter";

import style from "./Contato.module.css";

export function Contato({ name, number, email, icon, filters }) {
	return (
		<>
			<div className={style.list}>
				<div className={style.filter}>
					{filters.map((filter) => {
						return (
							<Filter key={filter} name={filter.Tec} color={filter.color} />
						);
					})}
				</div>
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
