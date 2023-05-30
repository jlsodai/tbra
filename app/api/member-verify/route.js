export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const email = searchParams.get("email");
	if (email) {
		return new Response(
			`Individual with email address ${email} is a member.`
		);
	}
	return new Response("Try again. No email specified.");
}
