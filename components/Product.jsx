import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/Product.module.css';
import { convertToPath } from '../lib/utils';
import CartButton from '../components/CartButton';
import Icon from '../public/img/x.svg';
const Product = ({ item, showAs, qty }) => {
	if (showAs === 'Page') {
		console.log(item);
		return (
			<div className={style.page}>
				<div className={style.image}>
					<Image
						src={item.image}
						alt={item.description}
						width={800}
						height={800}
					/>
				</div>
				<div className={style.info}>
					<div className={style.containerIcon}>
						<Link href="/store">
							<a>
								<Image src={Icon} alt="X boton" width={32} height={32} />
							</a>
						</Link>
					</div>
					<div>
						<h2>{item.title}</h2>
					</div>
					<div className={style.price}>S/. {item.price}</div>
					<div>{item.description}</div>
					<div>
						<CartButton item={item} />
					</div>
				</div>
			</div>
		);
	}
	if (showAs === 'ListItem') {
		return <div>List Item</div>;
	}
	return (
		<div className={style.item}>
			<div>
				<Link href={`/store/${convertToPath(item.title)}`}>
					<a>
						<Image
							src={item.image}
							alt={item.description}
							width={500}
							height={500}
						/>
					</a>
				</Link>
			</div>
			<div>
				<h3>
					<Link href={`/store/url-a-mi-componente`}>
						<a>{item.title}</a>
					</Link>
				</h3>
			</div>
			<div>S/.{item.price}</div>
			<div>
				<CartButton item={item} />
			</div>
		</div>
	);
};

export default Product;
