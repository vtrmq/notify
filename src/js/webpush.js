import { PUBLIC_KEY_PUBLIC, PUBLIC_KEY_PRIVATE } from '$env/static/public';
import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:webpush@sveltejs.co',
  PUBLIC_KEY_PUBLIC,
  PUBLIC_KEY_PRIVATE
);

export { webpush };
