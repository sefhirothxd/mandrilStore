import React, { useState } from 'react';
import { useAppContext } from '../components/StateWarapper';
import Layout from '../components/Layout';
import Product from '../components/Product';
import style from '../styles/Cart.module.css';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const [show, setShow] = useState(false);
  const cart = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const getTotal = () => {
    const total = cart.items.reduce(
      (acc, item) => (acc += item.qty * item.price),
      0
    );
    return total;
  };

  const handlerPay = (e) => {
    const { name, lastName, Email, city, codeP, dni, region, address } = e;
    cart.addOrders({
      items: cart.items,
      total: getTotal(),
      cliente: {
        name,
        lastName,
        Email,
        city,
        codeP,
        dni,
        region,
        address,
      },
    });
    cart.openPay();
  };
  return (
    <Layout>
      <h1 className="text-3xl">Checkout</h1>
      <div className="flex justify-between  w-full items-center flex-col md:flex-row">
        <div className="mt-5 md:mt-0 md:col-span-6 w-full sm:w-11/12 md:w-1/2">
          <form onSubmit={handleSubmit(handlerPay)}>
            <div className="shadow overflow-hidden sm:rounded-md ">
              <div className="px-4 py-5 bg-transparent sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-white"
                    >
                      Nombres
                    </label>
                    <input
                      type="text"
                      {...register('name', {
                        required: true,
                        maxLength: 80,
                      })}
                      className="mt-1 text-black focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-white"
                    >
                      Apellidos
                    </label>
                    <input
                      type="text"
                      {...register('lastName', {
                        required: true,
                        maxLength: 80,
                      })}
                      className="mt-1 text-black focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="dni-name"
                      className="block text-sm font-medium text-white"
                    >
                      DNI / CE
                    </label>
                    <input
                      type="text"
                      {...register('dni', {
                        required: true,
                        maxLength: 8,
                      })}
                      className="mt-1 text-black focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-white"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="text"
                      {...register('Email', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="mt-1 text-black focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-white"
                    >
                      Direccion
                    </label>
                    <input
                      type="text"
                      {...register('address', {
                        required: true,
                        maxLength: 80,
                      })}
                      className="mt-1 text-black focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-white"
                    >
                      Ciudad
                    </label>
                    <input
                      type="text"
                      {...register('city', {
                        required: true,
                        maxLength: 15,
                      })}
                      className="mt-1 text-black focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-white"
                    >
                      Provincia
                    </label>
                    <input
                      type="text"
                      {...register('region', {
                        required: true,
                        maxLength: 15,
                      })}
                      className="mt-1 text-black focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-white"
                    >
                      Codigo Postal
                    </label>
                    <input
                      type="text"
                      {...register('codeP', {
                        required: true,
                        maxLength: 15,
                      })}
                      className="mt-1  text-black focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-transparent text-right sm:px-6">
                {getTotal() > 0 ? (
                  <button
                    type="submit"
                    className="inline-flex w-36 justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-verde hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Pagar
                  </button>
                ) : (
                  <div className="bg-indigo-600">
                    <div className="max-w-7xl mx-auto py-3  ">
                      <div className="flex items-center justify-between flex-wrap">
                        <div className="w-full flex-1 justify-between flex items-center">
                          <p className="mx-3 font-medium text-base flex items-center text-white truncate">
                            <span className="flex p-2 mr-1 rounded-lg bg-indigo-800">
                              <SpeakerphoneIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="">
                              No hay productos en el carrito
                            </span>
                          </p>
                          <Link href="/store">
                            <a className="flex md:hidden lg:block justify-center hover:underline truncate mr-4">
                              Regresar
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <>
            {/* <h3>Tus Productos</h3> */}
            <div className={style.containerItemsCheckout}>
              {cart.items.map((item) => (
                <Product
                  key={item.id}
                  item={item}
                  showAs="ListItem"
                  qty={item.qty}
                />
              ))}
            </div>
            <div className="mr-5">
              <p className="text-base text-white truncate">Envio : S/. 0</p>
              <p className={style.totalCheckout}>Total : S/.{getTotal()}</p>
            </div>
          </>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
