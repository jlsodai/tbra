import { NextResponse } from "next/server";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const email = searchParams.get("email");
	if (email) {
		return NextResponse.json({
			status: "success",
			message: `Individual with email address '${email}' is a TBrA member.`,
		});
	}
	return NextResponse.json({
		status: "failure",
		message: `Try again. No email specified.`,
	});
}
