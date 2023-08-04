import { NextResponse, NextRequest } from "next/server";

import axios from "axios";

// const handler = async (req: NextRequest, res: NextResponse) => {
// 	if (req.method !== "GET") {
// 		console.log("Get request");
// 		return;
// 	}
// 	try {
// 		// get all games
// 		const response = await axios.get("https://pokeapi.co/api/v2/pokemon-color/");
// 		console.log(response);

// 		// res.status(200).json({ data: response.data });
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
// export default handler;

export async function GET() {
	const response = await axios.get("https://pokeapi.co/api/v2/pokemon-color/");
	return NextResponse.json({ data: response.data });
}
