import React from 'react';
import { useAppContext } from '../components/StateWarapper';
import style from '../styles/CartButton.module.css';
const CartButton = ({ item }) => {
	const cart = useAppContext();
	const handleClick = () => {
		cart.addItemCart(item);
	};
	return (
		<button className={style.button} onClick={handleClick}>
			Agregar Carrito
		</button>
	);
};

export default CartButton;
