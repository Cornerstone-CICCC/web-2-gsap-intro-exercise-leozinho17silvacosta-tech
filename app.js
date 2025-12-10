const animationBoxes = gsap.timeline();

// INITIAL ANIMATIONS:
animationBoxes
  .from(".box.red", { x: "-100vh", y: "-100vw", duration: 2, ease: "power2.inOut" })
  .from(".box.green", { x: "100vh", y: "-100vw", duration: 2, ease: "power2.inOut" }, "+0.5")
  .from(".box.blue", { x: "100vh", y: "100vw", duration: 2, ease: "power2.inOut" }, "+1")
  .from(".box.yellow", { x: "-100vh", y: "100vw", duration: 2, ease: "power2.inOut" }, "+1.5")
// TRANSFORM ANIMATIONS:
  .to(".box.red", { x: "86vw", backgroundColor: "green", borderRadius: "50%", duration: 1, ease: "power2.inOut" }, "+3.5")
  .to(".box.green", { y: "34vw", backgroundColor: "blue", borderRadius: "50%", duration: 1, ease: "power2.inOut" }, "<")
  .to(".box.blue", { x: "-86vw", backgroundColor: "yellow", borderRadius: "50%", duration: 1, ease: "power2.inOut" }, "<")
  .to(".box.yellow", { y: "-34vw", backgroundColor: "red", borderRadius: "50%", duration: 1, ease: "power2.inOut" }, "<")
// OUT ANIMATIONS:
  .to(".box.red", { x: "200vw", duration: 1, ease: "power3.in" }, "+4.5")
  .to(".box.green", { x: "200vw", duration: 1, ease: "power3.in" }, "<")
  .to(".box.blue", { x: "-200vw", duration: 1, ease: "power3.in" }, "<")
  .to(".box.yellow", { x: "-200vw", duration: 1, ease: "power3.in" }, "<");