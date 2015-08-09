'use strict';

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported :^)');
  navigator.serviceWorker.register('sw.js').
  then(function(registrationObject) {
    console.log(':^)', registrationObject);
  }).catch(function(error) {
    console.log(':^(', error);
  });
}
