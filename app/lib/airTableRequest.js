export const airTableRequest = async (endpoint) => {
	const myHeaders = new Headers();
	myHeaders.set("Authorization", `Bearer ${process.env.AIRTABLE_API_TOKEN}`);

	const res = await fetch(`${process.env.AIRTABLE_ROLES_URL}/${endpoint}`, {
		headers: myHeaders,
		cache: "no-store"
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	
	return res.json();
}