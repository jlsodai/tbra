export const airTableRequest = async (endpoint) => {
	const myHeaders = new Headers();
	myHeaders.set("Authorization", `Bearer ${process.env.AIRTABLE_API_TOKEN}`);

	const res = await fetch(`${process.env.AIRTABLE_ROLES_URL}/${endpoint}`, {
		headers: myHeaders,
		next: { revalidate: 10 }
	});

	if (!res.ok) {
		return { fields: {
			error: true
		} }
	}
	
	return res.json();
}