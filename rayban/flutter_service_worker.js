'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "39f96b31282a54de2d3601fd0b92297c",
"assets/AssetManifest.json": "a02531e1266eca1e40efcb7bdf5e1889",
"assets/assets/images/about1.png": "f45b29d366b32ac14892082f1f51f437",
"assets/assets/images/about2.jpg": "7608f8bf737e51e0841dd684795026c3",
"assets/assets/images/aboutCover1.jpeg": "582994729a361726a7b808b0211dd9b4",
"assets/assets/images/B1.png": "bc4be2af6063795a4be395d0c5596b57",
"assets/assets/images/B2.png": "e42be423ac8daab9493c21f711e1289e",
"assets/assets/images/B3.png": "8ac5c4dd57ef6a5f4f5d4f8b8f04a070",
"assets/assets/images/B4.png": "3b2f3cff47eda11031068582f6216482",
"assets/assets/images/B5.png": "fca8b0c1bee2092e7e5fe4ec18f2bba3",
"assets/assets/images/B6.png": "777a129e0b468e606a1dd6c9a15b1fa3",
"assets/assets/images/B7.png": "60424c2a3dc394351308b3bed940234c",
"assets/assets/images/B8.png": "b8690203fcc70ab068c1645ceb7e6fc4",
"assets/assets/images/backgroundServices.webp": "b8236ecb8ee1f74107115c25dae9eb02",
"assets/assets/images/BANKS.jpg": "6f2af2a59d4efc04c27f102ab344be6b",
"assets/assets/images/contact.jpg": "1ff0738f09f2074a03df74aa39879813",
"assets/assets/images/d8bd0f62": "777a129e0b468e606a1dd6c9a15b1fa3",
"assets/assets/images/english.png": "02a2a653b0b1fc43bffac2b51bc474c3",
"assets/assets/images/epoxy.jpg": "9b1114e68c0009f7986c7e2ac0edcf24",
"assets/assets/images/faceIcon.png": "ea22d70038c82153bd65820c0cca2675",
"assets/assets/images/gmail.png": "f14cbc4b90de05cefc405f34d9089569",
"assets/assets/images/heat.jpg": "401eff49e445818b8c36071629b9b893",
"assets/assets/images/howWe.jpg": "0fc9cc11915b3641984c3cd6291e57c0",
"assets/assets/images/location.png": "ee41ccd5ceecb2c9dbfc457d1d2287c1",
"assets/assets/images/logo.PNG": "d81892378691da8371103d878a8bccb4",
"assets/assets/images/logoapp.PNG": "a6f64d76aad38fac60ee5cbea00877fa",
"assets/assets/images/o1.jpg": "003528436690ba9ccb726ec60705ca9e",
"assets/assets/images/o2.jpg": "d3875f723a20554c07effb856c48552f",
"assets/assets/images/o3.jpg": "277682a7c38ba4d6b8076bd50918a20c",
"assets/assets/images/o4.jpg": "bd76c9a5a1142bb3e3832331c210e345",
"assets/assets/images/o5.jpg": "85cbaff9a55bb5c13916174182db5246",
"assets/assets/images/o6.jpg": "bd76c9a5a1142bb3e3832331c210e345",
"assets/assets/images/o7.jpg": "d3875f723a20554c07effb856c48552f",
"assets/assets/images/o8.jpg": "c1e6eb7ea30b7c6d6abadbad8bf654b1",
"assets/assets/images/o9.jpg": "861d4845edf376fb5897064d29821c57",
"assets/assets/images/ourServisec.png": "973bdb1eea1c09ec996f6bacea958de0",
"assets/assets/images/paint.jpg": "50b0c35358e56802cd2b2dfa1920ef2e",
"assets/assets/images/rayban1.jpg": "f6a9947d05d645abd985788becb0dade",
"assets/assets/images/rayban2.jpg": "04501fe8246da497eed322d7b008a3a5",
"assets/assets/images/rayban3.jpg": "874c9096ff90a33a96d1374411690dc6",
"assets/assets/images/real.jpg": "871cc49f89b2a33fe79acac1190a8677",
"assets/assets/images/repo1.PNG": "424b84cda28d7b7b732a485121a4e5ae",
"assets/assets/images/repo2.PNG": "3f3adf5b81750d7a1abbb84903f17bb8",
"assets/assets/images/S1.jpg": "49ce8221122f8f26b71ab0f768cdbb53",
"assets/assets/images/s2.jpg": "03ccfdf4f8957a1f08cd202d02a5e0b3",
"assets/assets/images/s3.jpg": "6b76ffeadb3dd0c2201da98a62a5e1ba",
"assets/assets/images/s4.jpg": "cb8c96370896da621fbf54b46c333e27",
"assets/assets/images/s5.jpg": "2bf9cc4cc1ea5f9d239fb2ddcdcfd16c",
"assets/assets/images/s6.jpg": "ee1e70e746fd28186ff02a30e91ba7ce",
"assets/assets/images/Saudi.png": "e0f367e2036d19a78a23c7d1922ca675",
"assets/assets/images/ser.png": "62fd37ef3203a999f7b9cfdaa4911e86",
"assets/assets/images/snapIcon.png": "fda90620cb00dfa16bf876594c478f24",
"assets/assets/images/twitterIcon.png": "2aabbff895e7fb0a98985f341c84f1f7",
"assets/assets/images/vision.jpg": "60df8c162afb686bc1b135f3363ae425",
"assets/assets/images/whatsapIcon.png": "78f49dec9ff7f8eeffeb88853020e768",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8e7ca95539daa1aa5ba3935c31b1554c",
"assets/NOTICES": "3dc3753e57a0a981134ca27b7789c323",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "a6f64d76aad38fac60ee5cbea00877fa",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3422e74b7bb806b38d0a2cb71b751794",
"/": "3422e74b7bb806b38d0a2cb71b751794",
"main.dart.js": "2dee5552980a2405e8095898213b65d5",
"manifest.json": "e65ae471e99c3876941c220029ce6322",
"version.json": "c9f9bf4b628a1ac9ed40411f31919d95"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
