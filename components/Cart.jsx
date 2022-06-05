import React from 'react';
import { useAppContext } from '../components/StateWarapper';
import Product from '../components/Product';
import style from '../styles/Cart.module.css';
const Cart = () => {
	const cart = useAppContext();

	const handleCloseCart = () => {
		cart.closeCart();
	};

	return (
		<div
			className={style.cart}
			style={{ display: cart.isOpen ? ' block' : 'none' }}
		>
			<button className={style.close} onClick={handleCloseCart}>
				Close
			</button>
			{cart.items.length === 0 ? (
				<div className={style.empty}>Carrito vacio</div>
			) : (
				<>
					<h3>Tus Productos</h3>
					<div>
						{cart.items.map((item) => (
							<Product
								key={item.id}
								item={item}
								showAs="ListItem"
								qty={item.qty}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
