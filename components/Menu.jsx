import React from 'react';
import Link from 'next/link';
import style from '../styles/menu.module.css';
const Menu = () => {
	return (
		<div className={style.containerMenu}>
			<nav className={style.menu}>
				<div>
					<Link href="/">
						<a className={style.link}>Home</a>
					</Link>
					<Link href="/store">
						<a className={style.link}>Store</a>
					</Link>
					<Link href="/faq">
						<a className={style.link}>FQA</a>
					</Link>
				</div>
				<div>
					<a className={style.link} href="#">
						Cart(0)
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Menu;
