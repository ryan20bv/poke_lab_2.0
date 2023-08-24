import { NextResponse, NextRequest } from "next/server";

import axios from "axios";

export async function GET() {
	const response = await axios.get("https://pokeapi.co/api/v2/pokemon-color/");
	return NextResponse.json({ data: response.data });
}
