'use strict';

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log(':^)', reg);
    // TODO: Step 4
  }).catch(function(error) {
    console.log(':^(', error);
  });
}
