import style from "./App.module.css";

import { CardPerson } from "./components/CardPerson/CardPerson";
import { Contato } from "./components/Contato/Contato";
import { Cabecalho } from "./components/Cabeçalho/Cabecalho";

export function App() {
	const listStack = [
		{ Tec: "JavaScript", color: "red" },
		{ Tec: "HTML", color: "yellow" },
		{ Tec: "CSS", color: "pink" },
		{ Tec: "Typescript", color: "purple" },
		{ Tec: "React", color: "cyan" },
		{ Tec: "HUAWEII", color: "blue" },
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
			<div>
				<div className={style.cabecalho}>
					<Cabecalho />
				</div>
				<div className={style.ListaContato}>
					<div className={style.contatos}>
						<h1 className={style.letra} style={{ backgroundColor: "#07847E" }}>
							D
						</h1>
						<Contato
							name="Deide Costa"
							number="(15) 6415-9365"
							email="deide.costa@example.com"
							icon="https://randomuser.me/api/portraits/med/women/95.jpg"
						/>
						<h1 className={style.letra} style={{ backgroundColor: "#633BBC" }}>
							J
						</h1>
						<Contato
							name="Jonas Brother"
							number="(95) 5598-8104"
							email="jonas.brother@example.com"
							icon="https://randomuser.me/api/portraits/med/men/95.jpg"
						/>
						<Contato
							name="Jorel Brother"
							number="(37) 4074-7201"
							email="jorel.brother@example.com"
							icon="https://randomuser.me/api/portraits/med/men/69.jpg"
						/>
						<h1 className={style.letra} style={{ backgroundColor: "#9A00B3" }}>
							A
						</h1>
						<Contato
							name="Abraão da Silva"
							number="(72) 9884-2555"
							email="abraao.silva@example.com"
							icon="https://randomuser.me/api/portraits/med/men/5.jpg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
