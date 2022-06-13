import { productos } from '../data';

export async function getItems() {
	// const req = await fetch('http://localhost:3000/api/items');
	// const items = await req.json();
	return productos;
}

export async function getLatestItems() {
	const items = await getItems();
	return items.slice(0, 4);
}
export async function getOffer() {
	const items = await getItems();
	return items.filter((predicate) => predicate.offer === true);
}
