import React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import style from '../styles/Layout.module.css';
const Layout = ({ children, title }) => {
	return (
		<div>
			<Head>
				<title>Tacora Shop {title ? `| ${title}` : ''}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Menu />
			<div className={style.container}>{children}</div>
		</div>
	);
};

export default Layout;
