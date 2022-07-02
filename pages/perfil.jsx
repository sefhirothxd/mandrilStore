import React, { useState, useEffect } from 'react';
import { Table } from 'flowbite-react';
import Layout from '../components/Layout';
import { useAppContext } from '../components/StateWarapper';
import { useFirestoreState } from '../hooks/useFirestore';
const Perfil = () => {
  const cart = useAppContext();
  const { orders, error, loading, getOrders } = useFirestoreState();

  useEffect(() => {
    getOrders();
  }, []);
  const loadingData = loading.getData && <p>Loading data...</p>;
  return (
    <Layout>
      <div>{loadingData}</div>
      {orders.length > 0 ? (
        orders.map((item, index) => {
          return (
            <>
              <h1 className="text-white text-xl md:text-2xl">
                Resumen de la orden N° {orders.length - index}
              </h1>
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
                          <Table.Cell key={index} width={'50%'}>
                            {item.title}
                          </Table.Cell>
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
