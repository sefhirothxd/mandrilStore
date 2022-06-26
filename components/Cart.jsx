import React from 'react';
import { useAppContext } from '../components/StateWarapper';
import Product from '../components/Product';
import style from '../styles/Cart.module.css';
import { useRouter } from 'next/router';
const Cart = () => {
  const cart = useAppContext();
  const router = useRouter();
  const handleCloseCart = () => {
    cart.closeCart();
  };

  const closeClick = (e) => {
    handleCloseCart();
    if (e == 1) {
      router.push('/login');
    }
    if (e == 2) {
      router.push('/checkout');
    }
  };

  const getTotal = () => {
    const total = cart.items.reduce(
      (acc, item) => (acc += item.qty * item.price),
      0
    );
    return total;
  };

  return (
    <div
      className={style.cart}
      style={{ display: cart.isOpen ? ' block' : 'none' }}
    >
      <div className="flex justify-between items-center">
        <button className={style.close} onClick={handleCloseCart}>
          Close
        </button>
        {cart.items.length >= 0 && !cart.isLogin ? (
          <button onClick={() => closeClick(1)}>
            <a className={style.procesar}>Procesar Compra</a>
          </button>
        ) : (
          <button onClick={() => closeClick(2)}>
            <a className={style.procesar}>Procesar Compra</a>
          </button>
        )}
      </div>
      {cart.items.length === 0 ? (
        <div className={style.empty}>Carrito vacio</div>
      ) : (
        <>
          {/* <h3>Tus Productos</h3> */}
          <div className={style.containerItems}>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs="ListItem"
                qty={item.qty}
              />
            ))}
          </div>
          <div className={style.total}>Total : S/.{getTotal()}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
