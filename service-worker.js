self.addEventListener('install',(event)=>{
console.log("Service worker")
//This is return to enusre service worker Doesnt end before caching
event.waitUntil(
//Returns a promise
caches.open("static").then((cache)=>{
// you can cache from other services and CDN as well
cache.addAll(["/","/index.html","/script.js","/images","/style.css"])
console.log(cache)
}).catch((err)=>{
console.log("caches",err)
})
)
});

self.addEventListener('activate',()=>{
  console.log("Service worker Activated")
  });
  
