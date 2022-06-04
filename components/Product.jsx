import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/Product.module.css';
const Product = ({ item, showAs }) => {
	if (showAs === 'Page') {
		return <div>Page</div>;
	}
	if (showAs === 'ListItem') {
		return <div>List Item</div>;
	}
	return (
		<div className={style.item}>
			<div>
				<Link href={`/store/url-a-mi-componente`}>
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
			<div>{item.price}</div>
			<div>
				<button>Add to cart</button>
			</div>
		</div>
	);
};

export default Product;
