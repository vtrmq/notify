import { json } from '@sveltejs/kit';
import { webpush } from "src/js/webpush";

export async function POST({ request, cookies }) {
	const { value } = await request.json();
  console.log("=====================")
  console.log(webpush)
  console.log("=====================")
  console.log(value)
	return json({});
}
