const staticMedEng = "medieval-england-site-v1"
const assets = [
    "/",
    "/index.html",
    "/Styles/style.css",
    "/JS/app.js",
    "/Images/lancaster.png",
    "/Images/normans.jpeg",
    "/Images/plantaganet.png",
    "/Images/york.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMedEng).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        cahces.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})