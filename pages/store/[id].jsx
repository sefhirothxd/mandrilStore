import React from 'react';
import Layout from '../../components/Layout';
import Product from '../../components/Product';
import { getPathsFromIds, getItemData } from '../../lib/utils';
const ProductPage = ({ productInfo }) => {
	return (
		<Layout>
			<Product item={productInfo} showAs="Page" />
		</Layout>
	);
};
export async function getStaticPaths() {
	const paths = await getPathsFromIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const id = params.id;
	const product = await getItemData(id);
	return {
		props: {
			productInfo: product,
		},
	};
}

export default ProductPage;
