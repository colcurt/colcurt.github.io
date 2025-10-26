var animation = bodymovin.loadAnimation({
  container: document.getElementById('eye'), // Required
  path: 'assets/lottieJson/eye.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
});
animation.resize();