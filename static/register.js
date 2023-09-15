if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service worker registered with scope: ', registration.scope);
      }, err => {
        console.log('Service worker registration failed: ', err);
      });
  })
}
