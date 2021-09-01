export function filterArray<T = any>(
	items: T[],
	key: keyof T,
	search: string,
): T[] {
	return items.filter(item => {
		const textLower = String(item[key]).toLowerCase();
		return textLower.includes(search.toLowerCase());
	});
}

