import Layout from '../components/Layout';
import Slider from '../components/Slider';
import { getLatestItems, getOffer } from '../services/itemService';
import Product from '../components/Product';
import styleItems from '../styles/Product.module.css';
export default function Home({ items, offer }) {
	return (
		<Layout title="Bienvenido">
			<div>
				<h1>Inicio</h1>
				<div>
					<Slider />
				</div>
				<div>
					<h3>Produtos Mas vendidos</h3>
					<div className={styleItems.items}>
						{items &&
							items.map((item) => (
								<Product key={item.id} item={item} showAs="probando" />
							))}
					</div>
				</div>
				<div>
					<h3>Oferta 2x1 !!</h3>
					<div className={styleItems.items}>
						{offer &&
							offer.map((item) => (
								<Product key={item.id} item={item} showAs="probando" />
							))}
					</div>
				</div>
			</div>
		</Layout>
	);
}
export async function getServerSideProps() {
	const res = await getLatestItems();
	const offer = await getOffer();
	return {
		props: {
			items: res,
			offer,
		},
	};
}
