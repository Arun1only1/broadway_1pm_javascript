// react => uses node
// node => js runtime
// node => single threaded => does one thing at a time
// non-blocking is achieved through even loop
console.log("Hi");

setTimeout(() => {
  console.log("Timeout1");
}, 5000);

setTimeout(() => {
  console.log("Timeout2");
}, 2000);

setTimeout(() => {
  console.log("Timeout3");
});

console.log("Hello");
