import { json } from '@sveltejs/kit';
import { webpush } from "src/js/webpush";

export async function POST({ request, cookies }) {
	const { subscription } = await request.json();
  console.log(value)
	return json({});
}
