console.log("Service worker")

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log(data)
  console.log("Notificación recibida");
  self.registration.showNotification( data.title, {
    body: data.message,
    icon: "https://linuxiac.b-cdn.net/wp-content/uploads/2020/06/archlinux.jpg"
  });
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
