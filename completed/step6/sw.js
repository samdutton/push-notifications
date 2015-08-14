'use strict';

console.log('Started', self);

self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  console.log('Push message', event);

  var title = 'Push message';
  var body = 'Push message received';
  var icon = 'images/icon.png';
  var tag = 'my-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
       body: body,
       icon: icon
       tag: tag
     })
   );
});
