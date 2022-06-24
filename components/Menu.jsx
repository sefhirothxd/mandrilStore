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
            <a className={style.link}>
              <Image
                src={
                  cart.isLogin
                    ? cart.userinfo.photoURL
                    : `/img/CarbonUserAvatar.svg`
                }
                width={30}
                height={30}
                alt="icono de avatar"
                className="rounded-full"
              />
            </a>
          </Link>
          <a className={style.link} onClick={handleOpenCart}>
            <Image
              src="/img/MdiCartVariant.svg"
              width={30}
              height={30}
              alt="icono carrito de compra"
            />
            {cart.getNumberItems() > 0 && (
              <span className={style.numProduct}>{cart.getNumberItems()}</span>
            )}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
