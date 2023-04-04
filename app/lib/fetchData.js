export async function fetchData(endpoint) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/${endpoint}`,
		{ cache: "no-store" }
	);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
