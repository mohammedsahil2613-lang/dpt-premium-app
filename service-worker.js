const cacheName = "dpt-premium-cache-v1";
const assetsToCache = [
  "/dpt-premium-app/",
  "/dpt-premium-app/index.html",
  "/dpt-premium-app/manifest.json",
  "/dpt-premium-app/service-worker.js"
];

// Install SW and cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
  self.skipWaiting();
});

// Activate SW
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if(key !== cacheName) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch cached files first
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
self.addEventListener('install', function(event) {
    console.log('Service Worker installed');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
});
