import React from 'react';
import { useAppContext } from '../components/StateWarapper';
import style from '../styles/CartButton.module.css';

const CartDelete = ({ item }) => {
  const cart = useAppContext();
  const handleClick = () => {
    cart.deleteItemCart(item);
  };
  return (
    <button className={style.buttonDelete} onClick={handleClick}>
      -
    </button>
  );
};

export default CartDelete;
