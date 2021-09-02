const VERSION = "V1";

//Self es como el this pero para los sw
self.addEventListener("install", (event) => {
    //Crehamos un precache 
  event.waitUntil(precache())
});

self.addEventListener("fetch", (event) => {
    //Extraemos la petición
  const request = event.request 
   //Solo queremos hacer algo con las peticiones get 
  if (request.method !== "GET") {
    return;
  }

  //Buscar en cache
  event.respondWith(cachedResponse(request))

  // Actualizamos el cache
  event.waitUntil(updateCache(request))
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/",
    "/index.html",
    "/src/index.js",
    "/src/MediaPlayer.js",
    "/src/plugins/AutoPlay.js",
    "/src/plugins/AutoPause.js",
    "/src/index.css",
    "/media/ojeras.mp4",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION)
  const response = await cache.match(request)
  return response || fetch(request)
}

async function updateCache(request) {
  const cache = await caches.open(VERSION)
  const response = await fetch(request)
  return cache.put(request, response)
}
