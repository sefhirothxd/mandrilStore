import React from 'react';
import Link from 'next/link';
import style from '../styles/Menu.module.css';
import Image from 'next/image';
const Menu = () => {
	return (
		<div className={style.containerMenu}>
			<nav className={style.menu}>
				<Link href="/">
					<a>
						<Image
							width={100}
							height={80}
							src="https://res.cloudinary.com/skillien/image/upload/v1654372282/logosinfondo_n29skv.png"
							alt="logo empresa"
						/>
					</a>
				</Link>
				<div>
					<Link href="/">
						<a className={style.link}>Inicio</a>
					</Link>
					<Link href="/store">
						<a className={style.link}>Productos</a>
					</Link>
					{/* <Link href="/faq">
						<a className={style.link}>Preguntas</a>
					</Link> */}
					<a className={style.link} href="#">
						Carrito(0)
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Menu;
