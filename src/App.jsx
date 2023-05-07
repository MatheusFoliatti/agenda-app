import style from "./App.module.css";

import { CardPerson } from "./components/CardPerson/CardPerson";
import { Contato } from "./components/Contato/Contato";

export function App() {
	const listStack = [
		{ Tec: "JavaScript" },
		{ Tec: "HTML" },
		{ Tec: "CSS" },
		{ Tec: "Typescript" },
		{ Tec: "React" },
		{ Tec: "HUAWEII" },
	];

	return (
		<div className={style.container}>
			<CardPerson
				cover="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"
				avatar="https://github.com/MatheusFoliatti.png"
				name="Matheus Foliatti"
				office="Assistende de TI"
				stacks={listStack}
			/>
			<div className={style.contatos}>
				<Contato
					name="Deide Costa"
					number="(15) 6415-9365"
					email="deide.costa@example.com"
					icon="https://randomuser.me/api/portraits/med/women/95.jpg"
				/>
				<Contato
					name="Jonas Brother"
					number="(15) 6415-9365"
					email="deide.costa@example.com"
					icon="https://randomuser.me/api/portraits/med/men/95.jpg"
				/>
			</div>
		</div>
	);
}
