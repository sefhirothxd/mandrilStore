import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import Layout from '../components/Layout';
import { useAppContext } from '../components/StateWarapper';
const Perfil = () => {
  const cart = useAppContext();
  console.log(cart.orders);
  return (
    <Layout>
      {cart.orders.length > 0 ? (
        cart.orders.map((item, index) => {
          return (
            <>
              <h1 className="text-white text-xl md:text-2xl">
                Resumen de la orden N° {index + 1}
              </h1>
              {/* <div className="flex justify-start item-center flex-col gap-3 my-2 rounded-lg pb-6 px-2 border-2 border-white">
                <h2 className="text-white text-xl md:text-2xl">
                  Datos de entrega
                </h2>
                <p>Nombre: {item.cliente.name}</p>
                <p>Apellido: {item.cliente.lastName}</p>
                <p>DNI: {item.cliente.dni}</p>
                <p>Direccion: {item.cliente.address}</p>
                <p>Distrito: {item.cliente.region}</p>
              </div> */}
              <div key={index + 2}>
                <Table hoverable={true} key={index} className="mt-5 bg-black">
                  <Table.Head>
                    <Table.HeadCell>Nombre del producto</Table.HeadCell>
                    <Table.HeadCell>Precio</Table.HeadCell>
                    <Table.HeadCell>Cantidad</Table.HeadCell>
                    <Table.HeadCell>Total</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {item.items.map((item, index) => {
                      return (
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          key={index}
                        >
                          <Table.Cell key={index}>{item.title}</Table.Cell>
                          <Table.Cell key={index}>{item.price}</Table.Cell>
                          <Table.Cell key={index}>{item.qty}</Table.Cell>
                          <Table.Cell key={index}>
                            {item.price * item.qty}
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </div>
              <div className="w-full flex mt-2 justify-end">
                <p className="text-2xl">Total a pagar: {item.total}</p>
              </div>
            </>
          );
        })
      ) : (
        <div className="flex w-full h-96 justify-center items-center">
          <h1 className="text-white text-xl md:text-6xl">No tiene pedidos</h1>
        </div>
      )}
    </Layout>
  );
};

export default Perfil;
