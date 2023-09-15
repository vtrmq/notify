console.log("Service worker")

self.addEventListener("push", (e) => {
  //console.log("Push:", event);
  const data = e.data.json();
  console.log(data)
  console.log("Notificación recibida");
});

/*
self.addEventListener("install", (event) => {
  console.log("Installed SW");
});

self.addEventListener("activate", (event) => {
  console.log("Activated SW");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch:", event.request);
});
*/
