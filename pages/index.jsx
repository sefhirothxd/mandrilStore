import Layout from '../components/Layout';
import Slider from '../components/Slider';
import { getLatestItems, getOffer } from '../services/itemService';
import Product from '../components/Product';
import styleItems from '../styles/Product.module.css';
export default function Home({ items, offer }) {
  return (
    <Layout title="Bienvenido">
      <div>
        <div className="">
          <Slider />
        </div>
        <div>
          <h3 className="font-bold text-3xl mt-5 mb-3 text-center">
            ¡Lo más vendido esta semana! 👍
          </h3>
          <p className="font-normal text-2xl mt-3 mb-5 text-center">
            Son los productos destacados en nuestra tienda online{' '}
          </p>
          <div
            className={`grid overflow-hidden grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center xl:grid-cols-4 grid-rows-1 gap-5 grid-flow-row`}
          >
            {items &&
              items.map((item) => (
                <Product key={item.id} item={item} showAs="probando" />
              ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-3xl mt-5 mb-3 text-center">
            Las mejores ofertas de la semana 🎉
          </h3>
          <p className="font-normal text-2xl mt-3 mb-5 text-center">
            Encuentra todos nuestros descuentazos en la categoría Pareja! 💯
          </p>
          <div
            className={`grid overflow-hidden grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center xl:grid-cols-4 grid-rows-1 gap-5 grid-flow-row`}
          >
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
