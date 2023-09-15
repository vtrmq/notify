if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    return navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service worker registered with scope: ', registration.scope);
        return registration;
      }, err => {
        console.log('Service worker registration failed: ', err);
      });
  })
}
