<script>
  //import { browser } from "$app/environment";
  //import "src/js/webpush";
  import "src/css/styles.css";



  let notify = "";
  function enableNotifications() {
    if (!window.Notification) {
      alert("Notificaciones no soportadas")
      return;
    }
    notify = Notification.permission;
    if (Notification.permission === "granted") {
      new Notification("1. Granted")
    } else if (Notification.permission === "denied" || Notification.permission === "default") {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          new Notification("2. Granted")
        }
      });
    }
  }

  async function handleNotify() {

    const registration = await navigator.serviceWorker.register('/sw.js',{scope: '/'});
    console.log("===>>", registration)

    const response = await fetch('/api/subscription', {
      method: 'POST',
      body: JSON.stringify({ "value": 132456 }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

</script>

<h1 class="title">Notifications with SvelteKit</h1>
<p>{notify}</p>
<button on:click={enableNotifications}>Activar notificaciones</button>

<button on:click={handleNotify}>Notificar</button>

<style>
  .title {
    font-size: 1.2em;
    padding: 1em 0;
  }
</style>
