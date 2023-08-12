import { NextResponse, NextRequest } from "next/server";

import axios from "axios";
// try redux

export async function GET(req: NextRequest) {
	// console.log("request :", req.nextUrl);
	// console.log("request :", req.nextUrl.searchParams.get("selectedUrl"));
	const selectedUrl = req.nextUrl.searchParams.get("selectedUrl");
	// console.log(selectedUrl);

	const response = await axios.get(`${selectedUrl}`);
	return NextResponse.json({ data: response.data });
}
