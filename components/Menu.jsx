import { Fragment } from 'react';
import { useAppContext } from '../components/StateWarapper';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '../styles/Menu.module.css';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const solutions = [
  {
    name: 'Inicio',
    description: 'Pagina de inicio donde encontraras ofertas.',
    href: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'Productos',
    description: 'Lista de todos los productos de la cultura chicha.',
    href: '/store',
    icon: CursorClickIcon,
  },
];
const loginListUrl = [
  {
    name: 'Perfil',
    description: 'Pagina de inicio donde encontraras ofertas.',
    href: '/',
    icon: ChartBarIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
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
    <Popover className="relative bg-bgBlack">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center lg:flex-row flex-row-reverse py-6 lg:justify-start lg:space-x-10">
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-bgBlack rounded-md p-2 inline-flex items-center justify-center text-white  focus:outline-none focus:ring-2 ring-gray-600 border-gray-600 border focus:ring-inset ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex space-x-5">
            <Link href="/">
              <a className="text-xl font-bold text-white hover:text-orange-500">
                Inicio
              </a>
            </Link>
            <Link href="/store">
              <a className="text-xl font-bold text-white hover:text-orange-500">
                Productos
              </a>
            </Link>
          </Popover.Group>
          <div className="flex justify-center lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <Image
                  width={234}
                  height={80}
                  src="/img/MandrilLogoFinal.png"
                  alt="Workflow"
                />
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-end  lg:w-72">
            {cart.isLogin ? (
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-bgBlack z-10 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                      )}
                    >
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
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-56 max-w-md sm:px-0 lg:ml-0 lg:-left-20 lg:-translate-x-1/2">
                        <div className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-bgBlack px-2 py-3 sm:gap-8">
                            {loginListUrl.map((item) => (
                              <Link key={item.name} href={item.href}>
                                <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-600">
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-white"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-white">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                            <a
                              className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-600 cursor-pointer relative"
                              onClick={handleCloseLogin}
                            >
                              <RefreshIcon
                                className="flex-shrink-0 h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base font-medium text-white">
                                Cerrar sesion
                              </span>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <>
                <Link href="/login">
                  <a className="whitespace-nowrap text-base font-medium text-white hover:text-orange-500">
                    Iniciar sesión
                  </a>
                </Link>
                <Link href="/register">
                  <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700">
                    Registrarse
                  </a>
                </Link>
              </>
            )}
            <a className={style.carrito} onClick={handleOpenCart}>
              <Image
                src="/img/MdiCartVariant.svg"
                width={30}
                height={30}
                alt="icono carrito de compra"
              />
              {cart.getNumberItems() > 0 && (
                <span className={style.numProduct}>
                  {cart.getNumberItems()}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 -top-0 w-full inset-x-0  transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-bgBlack divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    width={234}
                    height={80}
                    src="/img/MandrilLogoFinal.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-bgBlack border-gray-600 border rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset ring-gray-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-600">
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-white">
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                  <a
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-600 cursor-pointer relative"
                    onClick={handleOpenCart}
                  >
                    <Image
                      src="/img/MdiCartVariant.svg"
                      width={24}
                      height={24}
                      alt="icono carrito de compra"
                    />
                    <span className="ml-3 text-base font-medium text-white">
                      Carrito de compra
                    </span>
                    {cart.getNumberItems() > 0 && (
                      <span className={style.movilNumProduct}>
                        {cart.getNumberItems()}
                      </span>
                    )}
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                {cart.isLogin ? (
                  <>
                    <Link href="/">
                      <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700">
                        Perfil
                      </a>
                    </Link>
                    <p className="mt-6 text-center  text-base font-medium text-gray-500">
                      ¿ya te vas?{' '}
                      <a
                        onClick={handleCloseLogin}
                        className="text-orange-400  cursor-pointer hover:text-orange-500"
                      >
                        Cerrar sesión
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
                    >
                      Registrarse
                    </a>
                    <Link href="/login">
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        ¿Eres Cliente?{' '}
                        <a className="text-orange-400 cursor-pointer hover:text-orange-500">
                          Iniciar sesión
                        </a>
                      </p>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
