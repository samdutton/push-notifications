'use strict';

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log(':^)', reg);
    reg.pushManager.subscribe().then(function(sub){
     console.log('endpoint:', sub.endpoint);
      // TODO: Step 5
    });
  }).catch(function(error) {
    console.log(':^(', error);
  });
}
