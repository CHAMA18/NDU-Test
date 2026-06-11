'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "aaa1b3163eff4abaf84e116bd081ca1c",
"CNAME": "8e6d3a260f9c1dbf27a4f2c887de83cd",
"icons/Icon-192.png": "320d492077190efa86ab888faedc5909",
"icons/Icon-512.png": "fd1d28bcdf6708dbc67dd5d7b3e234c4",
"icons/Icon-maskable-192.png": "320d492077190efa86ab888faedc5909",
"icons/Icon-maskable-512.png": "fd1d28bcdf6708dbc67dd5d7b3e234c4",
"favicon.png": "e5fffbfe36d1ca04da73df367369bde0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/assets/config/api_config.txt": "45562e798bc0a15ce7ffb9877b37e732",
"assets/assets/images/Ndu_Project_logo.png": "76eecf4cb5694ef51eb8dcc5010c6c22",
"assets/assets/images/NDU.png": "c13979f0dbb00b540a57125afdec0c2f",
"assets/assets/images/Logo_data.svg": "cee200cc18a820138964bc9d8840a970",
"assets/assets/images/Radicalz.jpg": "65d367f5517b9ff53a92099bc52d4233",
"assets/assets/images/professional-portfolio.png": "393fdc500e64516bd02a90f4bbe9ae92",
"assets/assets/images/search.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/images/Ndu_logo.png": "6dbe55fa1a11baf47a4aaadc4684390c",
"assets/assets/images/Logo.svg": "7717262ffc9db71d92eda7c970319d9c",
"assets/assets/images/Ndu_Logo.png": "6dbe55fa1a11baf47a4aaadc4684390c",
"assets/assets/images/monitoring.png": "1c4cd7f75aca760b9fa839f9b4b36e15",
"assets/assets/images/project-management.png": "6ed09a800c0bb37b17dfa0710a132a45",
"assets/assets/images/data.png": "c13979f0dbb00b540a57125afdec0c2f",
"assets/assets/images/Ndu_Contract_Details.jpg": "cf88dd2f54b5a75c64c2915fbfe3ff9b",
"assets/assets/images/NDU_items.png": "c13979f0dbb00b540a57125afdec0c2f",
"assets/assets/images/Ndu_logodarkmode.png": "bb1bef10358c75cc2028de2d5b37cfcd",
"assets/assets/images/favicon.ico": "ff4658df03fac8131fba9412a60e4522",
"assets/assets/images/Logo.png": "c50217b1d345b7fb1f6c29d693bc8fc2",
"assets/assets/images/construction_planning_blueprint_null_1761642511526.jpg": "1047d3e7aaec2e86cec0599ab88eb608",
"assets/assets/images/nduitems.jpg": "cdf270b99d53c9df9f6855e9419f24b2",
"assets/assets/images/NDU_logo.jpg": "1fad55693efafb444c7e1e916ff04124",
"assets/assets/images/Ndu_Schedule.jpg": "cbc67fe2dc06a4736bf82b3962f4a43f",
"assets/assets/fonts/Satoshi-Black.otf": "22d9e9fdd8728dfa00bb0f49124ce5a7",
"assets/assets/fonts/Satoshi-Regular.otf": "177a4dda04b52dedbd966942e932c5dc",
"assets/assets/fonts/Satoshi-BoldItalic.otf": "7fcee65089c5d8703104aac893cf3b66",
"assets/assets/fonts/Satoshi-Medium.otf": "378def5c1f4df7eb6554a88608893391",
"assets/assets/fonts/Satoshi-LightItalic.otf": "0f712df4c1cc0862127955e4277b533e",
"assets/assets/fonts/Satoshi-MediumItalic.otf": "d65b71e1365c0b1e07a7a2f3de0ebfc5",
"assets/assets/fonts/Satoshi-Light.otf": "d1d1eaba7a325545089fa9d773459211",
"assets/assets/fonts/Satoshi-Italic.otf": "e12f5b2bf97310399d4ab6f8919b67b0",
"assets/assets/fonts/Satoshi-BlackItalic.otf": "6a497defaeb091055a4de4f20aefad0d",
"assets/assets/fonts/Satoshi-Bold.otf": "4a6fdcfc68ad464e8a9811e4edcacf00",
"assets/AssetManifest.bin.json": "90c48bd5c9511c3170e8a70ee0d870c1",
"assets/AssetManifest.json": "a171067a065a188756ee5f3f3d574f65",
"assets/NOTICES": "02e7c7dc9b4418bfe1c815e426357f45",
"assets/AssetManifest.bin": "df46bf0a6351c9030ffe96e1c7364564",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "4523e0d4eda7d7da101ded423f7d20d5",
"flutter_bootstrap.js": "d074b71d7700cb4e62a1e22b25e56557",
"favicon.ico": "a3495737abc8b68cf56a4cc2904d9315",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"index.html": "33fb82520ff12e93d11337ef8f0ed20a",
"/": "33fb82520ff12e93d11337ef8f0ed20a",
"manifest.json": "0acb28c9ea3debb8b59ca99db95a96ed",
"version.json": "2e90eaaf6b87abbe2a7f4cfa30fb4076",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
