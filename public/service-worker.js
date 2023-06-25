self.addEventListener('install',(event)=>{
console.log("Service worker")
//This is return to enusre service worker Doesnt end before caching
event.waitUntil(
//Returns a promise
caches.open("static").then((cache)=>{
// you can cache from other services and CDN as well
cache.addAll(["/","/index.html","/script.js","/images","/style.css"])
}).catch((err)=>{
console.log("caches",err)
})
)
});

self.addEventListener('activate',()=>{
  console.log("Service worker Activated")
  });

  // To fetch the Data from  cache
// self.addEventListener("fetch",(event)=>{
// event.respondWith(
// caches.match(event.request)
//   .then((res)=>{
//     console.log(res)
//     if(res){
//       return res
//     }
//     else{
//       return fetch(event.request);
//     }
//   }
// )
// );
// });
  
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      }).catch((err)=>{
        console.log(err)
      })
  );
});


