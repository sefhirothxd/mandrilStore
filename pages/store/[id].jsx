import React from 'react';
import Layout from '../../components/Layout';
import Product from '../../components/Product';
const ProductPage = () => {
	return (
		<Layout>
			<Product />
		</Layout>
	);
};
export async function getstaticPaths() {
  return {}

}
export default ProductPage;
