import React from 'react';
import Layout from '../../components/Layout';
import { getItems } from '../../services/itemService';
import Product from '../../components/Product';
import styleItems from '../../styles/Product.module.css';
const index = ({ items }) => {
  return (
    <Layout>
      <h1 className="font-bold text-3xl mb-3">Productos</h1>
      <div
        className={`grid overflow-hidden grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center xl:grid-cols-4 grid-rows-1 gap-5 grid-flow-row`}
      >
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="probando" />
          ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await getItems();
  return {
    props: {
      items: res,
    },
  };
}

export default index;
