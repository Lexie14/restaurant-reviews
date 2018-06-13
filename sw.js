// Create cache for all the website's assets
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('static-v1').then(function(cache) {
            return cache.addAll([
                '/',
                'css/styles.css',
                'data/restaurants.json',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'index.html',
                'restaurant.html'
            ]);
        })
    );
});

// Response to the requests from the cache if there is one, in other case - fetch them from the network
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response) return response;
            return fetch(e.request);
        })
    );
});