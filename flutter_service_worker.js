'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9612b672bead13ba77087a8df02720fb",
".git/config": "5aa63e468b241d7130b57c68e5e10b7b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cb3ee4fad036f93585f18ae3084d6b56",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bc1fbf7b30471eef414f353237313388",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2327cd20401b337dd9676d53e1fd852",
".git/logs/refs/heads/main": "5b6dc137042b4c7ac6d9809b50f96a1b",
".git/logs/refs/remotes/origin/main": "78a430c7188ee7b948592048940aba3e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/a234ffccf297bb9520a7ae2b0aab7cb41e560a": "db5db5e982df219d559ea4487ed1c51f",
".git/objects/08/c55b71682a55fe31682c2927d5f0aca7048dfd": "8f7fa4e97555433b60bae55ec9a57a4e",
".git/objects/0b/15d580f560409832c24a95b6ae4383165c1043": "3b492a62fa97baa7766afabea6e8b26d",
".git/objects/0c/7371bfd9ee65c0d85e4a9a8be57f4f7813b80b": "d49a1b927b4552b0f1f22717f40acbff",
".git/objects/0d/07fda7b9db1985564f7a984d9512542bd222b7": "5ff0fe16d679a937ad56d77187a29c7f",
".git/objects/0e/799077272e2e88dc7cd067fa128431009b2725": "80f51539aebe951581f899aac694a9f4",
".git/objects/12/a86a176579451be48cb071f4843a40b698869c": "f95d5dbd37d286e7bd965db0126e87ff",
".git/objects/16/5825aec73ba8739bd47d2ab8c667f575d34666": "441a7ebf8a2170931a0392a3111a6c69",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d1d6f152bd7f6a435a6433530714582c3f7907": "043f06dd1a09f82b8b88ce929cb43c44",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/c614c6bc5750e741c22d6808f5ef2524c6bd83": "ce31eb5c65150ccdacb37b976fc40242",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/d4e0f182a4c45b4d67c502cceb337bbb733aff": "623f7f385df07109449df476e1fc1842",
".git/objects/32/deec44af26e43743979835da9eefd2ed245e60": "50a2d2231f65b32b0e46071b77e40c71",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/277997ca4c60abe07b1613fd6f1f24a21b3be8": "85a4cc61b705afc18ad647ffb9f7a69c",
".git/objects/3f/32308123e1e07296da18ca0e42b1c32cc0bb90": "029f8ee6f6c9120f9afc3ad8b3c3a3cb",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/43/9f4fc541ab83aa1cd6f7ca73f33d6891d29eb3": "842986bceda8ce4ec48838315af64e60",
".git/objects/46/3196551832b0a1236a980b51417dad9e20ce33": "fb27b90bb7013158cffa84c09faa99b5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/bdd524b048b8e778472aaf798fdd66f0f78dd1": "549950bde591cba1b83b86ca2ee57ae8",
".git/objects/4e/0d7e1801341a7d53d465d487ab738d74894e69": "9eda4444f2b950f5960ae2ba36fcc12f",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/c79ec798af259756114cb9305741dfb9d13926": "3cf8517749ef90e73b162688207cd376",
".git/objects/56/1fa4641b5d0b595c45bda8d1c7326c4e957927": "9ca289ad99d3e81430c0abc6fcfd0751",
".git/objects/56/eab2a4d49cf26e8373524741520b1c84615f62": "8c61ff966a1918316e106769e8342432",
".git/objects/58/1e2725a6a44e9c607d3a64c7f1893af1b3fbaf": "a38e1002dbfdefb4cb4a8a4b8227e199",
".git/objects/5a/9bd68f43db56cb3920e06ffa92af3a024c61cb": "9a15d90a20184e544c0ca6081f5e07b5",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/65/1c3c964ba7be1c129c2ec884dc200281f363f9": "5663bff8d20af0b5a324797657c73519",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/c480ff9921be5ac5ef102fa54d2bd2b55614ab": "d1d4056bc029fee8d472794bc3ae2893",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/77/52c11bc16564fd3680f8f2764f59c81f45f8ea": "c61bea939814c9b3be78cc9cef4d9ec6",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/a37baa9a74665daa553e528e07adb8a59127aa": "df984cd70d2bb07d33f1d0f652e30d16",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/8f42761a8adcc56c2c856427965fad43e428d6": "f87d321fbfe9bba75dbc1dd993eccaa4",
".git/objects/86/b2c8629180a96e9d0cd8afca565da67dfaf66f": "0676452dade403193c84ad0aa53903a3",
".git/objects/87/8f3f0c5ebc17eb3d67a66c751ea2dd6921e056": "39160d8125ec52d98b85a6216e1c2878",
".git/objects/88/9445cd8222fe45de8e9ae70a421c30f8a5d1b9": "0ae86bc9210785d6442336a677af22d1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/92618cfdd411de87a0d20ab4cf633fec81eae8": "208ed041f5a994d56a7482bfb9d7a01b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/9b44b2a636ab532558d7e2984e82548e20d169": "7e59d6cd9b9d8572439814dd4d1638bf",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/96/25e045fc3b75e59ca4caebe0abdd721f2051d6": "5e064c9f7b5fdcef881d0696514e8144",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/d5d4bc66e956eda772ef4ff9951d6b27b580d6": "a31829530b51d0b68ed9786d8d41b10f",
".git/objects/9c/feaf843d40bf608451ce6fa7befb93d98804f3": "5254aeb868f611aa65d9d22e703def22",
".git/objects/9f/1e1fcd9dfd10e1f7d1d1297accf72ee5f6a677": "0ecc3bf8715395ab9b1abc5f59fbeebe",
".git/objects/a1/a5cd27a667e92b738b7329be526e6b8e011189": "1d83988a7bab52d7d282f4c13991e55d",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/aa/1b8bdb5c273d0632877a1931f542360fe6bf1a": "ecadb1de8a49f963fc82dfecf97bff5d",
".git/objects/ad/632caa4f9c3701c81b480e85cd9fdcade66b88": "774c67ed8408a85608d4bfe09e3c4897",
".git/objects/b5/3bc3df6e62c4a0605cefaf9aec623ec499306b": "bea26c08258960893a37a3debddaf0b0",
".git/objects/b6/25ea11e053bbe38e58f62b038ff15bdbaac287": "e8d4b5f8d3c55b6f5f205e47ab06f0f4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/81fbaa8c269acf23ff04f06c8a3cb90acc5a93": "09e7d501a1775bcd72b656bc19004c16",
".git/objects/c2/05761201c6ea1484e1a433aedf6996cebcb208": "2ba2ae60a263721a32791e6505f623e5",
".git/objects/c3/290fe02ee0d8487d07735b8e09a0187c95f3fa": "c49e83b8413434c36cbb443eafdb307d",
".git/objects/c6/94aed70ce56e3a7d10735584d730f92c69f5ae": "7121d78f189b91376d83151ec3bb8f44",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/f73819727730949d5fa65fe43061e113e82de0": "96f24f05d27553c2128b16e2ee282773",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/86f9c140932b32ebe26ab2aa0c3e44390847cb": "78347d3b1bbfb5f0918e5a0b16c19149",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/4ed9be3e69dca787765332adff025c77f1b1d1": "715c454a4040dfe630d5ed8879ec79b6",
".git/objects/e3/3b1b8aa1f433faf161aaaff8611629c4a06f57": "88249e364986b542521ab69a3d6ed98c",
".git/objects/ea/66bc3246de07d94c75f691bf5bef140e54cfdb": "36602405d8d26866888f0b0819b26b41",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/4eecad0ed1f03c8873c221feecfd05fd2de759": "7500b8bc7a1431ced822bd0fd2e1edff",
".git/objects/ef/842b847a41e8b4ca6509c7fb9abc8c02d57cc3": "be26d2c941e5558e3fb3d4f22fabae56",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f8/f891a86801aa567dc8bbecda55549e863e08c5": "c4208c86061b8ddb4976a5b8876a7d42",
".git/objects/f9/0d622a6039f9825190b80453a792ac92821706": "77fff670229926696b8ded6f26a088da",
".git/objects/f9/11dfaf608131cb9001145b4f3880940e34e751": "7e32a5990557cdc8e098e8747d6d1a7b",
".git/ORIG_HEAD": "cf57bf74901be8d99e59535985cb0838",
".git/refs/heads/main": "cf57bf74901be8d99e59535985cb0838",
".git/refs/remotes/origin/main": "cf57bf74901be8d99e59535985cb0838",
"assets/AssetManifest.bin": "9588dfe815da077b5c94098dc7065a0c",
"assets/AssetManifest.bin.json": "a2367649c6936151abdd53788031c279",
"assets/AssetManifest.json": "a6e5cf7a30835fc5f1a86d609832a1bd",
"assets/assets/images/dev.JPG": "7da9c917427d9273a5f24b7d47cc5c6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1b99b90300cfc49fb7d7a2d489dcfc12",
"assets/NOTICES": "f9b0b8b129204e819a50833aaec099eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "8820c66da69edbe0b3532566006f6e1f",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "6dc92c20cef0364172c972592a9f2456",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e74933a3e800e6a064b17e3a47240530",
"/": "e74933a3e800e6a064b17e3a47240530",
"main.dart.js": "1935d5e72c259c20bc49f537097527bf",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
