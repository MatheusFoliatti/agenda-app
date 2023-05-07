import React from "react";
import style from "./Filter.module.css";

export function Filter({ name, color }) {
	return (
		<span className={style.span} style={{ backgroundColor: color }}>
			{name}
		</span>
	);
}
