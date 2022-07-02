import React from 'react';
import { useAppContext } from './StateWarapper';
import style from '../styles/CartButton.module.css';

const CartDelete = ({ item }) => {
  const cart = useAppContext();
  const handleClick = () => {
    cart.addItemCart(item);
  };
  return (
    <button className={style.buttonDelete} onClick={handleClick}>
      +
    </button>
  );
};

export default CartDelete;
