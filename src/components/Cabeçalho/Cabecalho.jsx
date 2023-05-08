import React from "react";

import style from "./Cabecalho.module.css";
import addIcon from "../../assets/add.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import searchIcon from "../../assets/search.svg";

export function Cabecalho({}) {
	return (
		<>
			<div className={style.header}>
				<div className={style.topRow}>
					<p className={style.h1}>Meus Contatos</p>
					<div className={style.buttons}>
						<button className={style.buttonAdd}>
							<img src={addIcon} alt="adicionar" />
						</button>
						<button className={style.buttonEdit}>
							<img src={editIcon} alt="editar" />
						</button>
						<button className={style.buttonDelete}>
							<img src={deleteIcon} alt="deletar" />
						</button>
					</div>
				</div>
				<div className={style.SearchBox}>
					<div className={style.inputBar}>
						<img
							className={style.SearchIcon}
							src={searchIcon}
							alt="Search Icon"
						/>
						<input
							className={style.SearchBar}
							type="text"
							name="Search"
							placeholder="Busque por nome ou por dados de contato..."
						/>
					</div>
				</div>
			</div>
		</>
	);
}
