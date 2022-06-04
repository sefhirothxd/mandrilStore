export async function getItems() {
	const req = await fetch('http://localhost:3000/api/items');
	const items = await req.json();
	return items;
}

export async function getLatestItems() {
	const items = await getItems();
	return items.slice(0, 3);
}
