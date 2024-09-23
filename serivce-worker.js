//This code executes on its own worker or thread
self.addEventListener("install", event => {
    console.log("Service worker installed");
});
self.addEventListener("install", event => {
    console.log("Service worker activated");
});
 