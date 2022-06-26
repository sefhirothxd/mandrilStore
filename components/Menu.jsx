import React, { Fragment } from 'react';
import Link from 'next/link';
import style from '../styles/Menu.module.css';
import { useAppContext } from '../components/StateWarapper';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const MenuNav = () => {
  const router = useRouter();
  const cart = useAppContext();
  const handleOpenCart = () => {
    cart.openCart();
  };
  const handleCloseLogin = async () => {
    console.log('cerrando');
    try {
      await cart.googleLogout();
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginOrRegister = (e) => {
    if (e == 1) {
      router.push('/login');
    } else {
      router.push('/register');
    }
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
          <div className="mx-2 relative">
            {cart.isLogin ? (
              <Menu>
                <Menu.Button>
                  <Image
                    src={
                      cart.isLogin && cart.userinfo.photoURL
                        ? cart.userinfo.photoURL
                        : 'https://res.cloudinary.com/skillien/image/upload/v1654372282/logosinfondo_n29skv.png'
                    }
                    width={32}
                    height={32}
                    alt="icono de avatar"
                    className="rounded-full cursor-pointer"
                  />
                </Menu.Button>
                <Menu.Items
                  className={
                    'absolute -left-14 flex justify-center w-36 z-10 items-start px-2 flex-col bg-black rounded-xl py-2 text-xl'
                  }
                >
                  <Menu.Item>
                    <button className="hover:bg-blue-700 text-left w-full">
                      Perfil
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      onClick={handleCloseLogin}
                      className="hover:bg-blue-700 text-left w-full"
                    >
                      Cerrar Sesion
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Menu>
                <Menu.Button>
                  <Image
                    src={`/img/CarbonUserAvatar.svg`}
                    width={32}
                    height={32}
                    alt="icono de avatar"
                    className="rounded-full"
                  />
                </Menu.Button>
                <Menu.Items
                  className={
                    'absolute flex -left-14  justify-center item-center flex-col bg-black rounded-xl py-2 text-xl'
                  }
                >
                  <Menu.Item>
                    <button
                      onClick={() => handleLoginOrRegister(1)}
                      className="hover:bg-blue-700 px-2"
                    >
                      Login
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      onClick={() => handleLoginOrRegister(2)}
                      className="hover:bg-blue-700 px-2"
                    >
                      Registrarse
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            )}
          </div>
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

export default MenuNav;
