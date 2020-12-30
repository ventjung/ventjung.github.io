self.addEventListener('install', function(event) {
  console.log('install ok');
});

self.addEventListener('fetch', function(event) {
  console.log('fetch ok');
});
