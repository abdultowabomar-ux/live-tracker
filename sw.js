
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => clients.claim());

self.addEventListener('periodicsync', async event => {
    if (event.tag === 'geo-sync') {
        // Browser normally blocks geolocation in SW, but placeholder is here.
    }
});
