import { json } from '@sveltejs/kit';
import { webpush } from "src/js/webpush";

export async function POST({ request, cookies }) {
	const { subscription } = await request.json();
  const pushSubscription = subscription;
  const payLoad = JSON.stringify({
    title: "My custom notification",
    message: "Hello Riohacha"
  });
  await webpush.sendNotification(pushSubscription, payLoad);
	return json({ subscription });
}
