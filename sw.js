// sw.js
const CACHE_NAME = 'pc-mastery-v1.0';
const ASSETS = [
    'index.html',
    'script.js',
    'relay.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@500;700&display=swap'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keys) => Promise.all(keys.map((key) => { if (key !== CACHE_NAME) return caches.delete(key); }))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((cached) => cached || fetch(e.request).then((res) => caches.open(CACHE_NAME).then((cache) => { cache.put(e.request, res.clone()); return res; }))));
});