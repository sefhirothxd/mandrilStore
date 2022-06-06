import React from 'react';
import Link from 'next/link';
import style from '../styles/Menu.module.css';
import { useAppContext } from '../components/StateWarapper';
import Image from 'next/image';
const Menu = () => {
	const cart = useAppContext();
	const handleOpenCart = () => {
		cart.openCart();
	};

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
					<Link href="/login">
						<a className={style.link}>Login</a>
					</Link>
					<a className={style.link} onClick={handleOpenCart}>
						Carrito({cart.getNumberItems()})
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Menu;
