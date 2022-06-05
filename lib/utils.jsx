import { getItems } from '../services/itemService';

export async function getPathsFromIds() {
	const items = await getItems();
	const ids = items.map((item) => {
		return {
			params: { id: convertToPath(item.title) },
		};
	});
	return ids;
}

export async function getItemData(id) {
	const items = await getItems();

	return items.find((item) => convertToPath(item.title) === id);
}

export function convertToPath(title) {
	return title
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
}
