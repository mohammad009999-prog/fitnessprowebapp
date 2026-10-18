<<<<<<< HEAD
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fitness-pro-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
=======
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fitness-pro-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
>>>>>>> 80c01da217c37133fa018884a730fc85c1f5e515
});