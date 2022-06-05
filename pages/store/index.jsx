import React from 'react';
import Layout from '../../components/Layout';
import { getItems } from '../../services/itemService';
import Product from '../../components/Product';
import styleItems from '../../styles/Product.module.css';
const index = ({ items }) => {
	return (
		<Layout>
			<h1>Productos</h1>
			<div className={styleItems.items}>
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
