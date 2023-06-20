let value = true;
let p1 = new Promise((resolve, reject) => {
  resolve("hi");
});
let p2 = new Promise((resolve, reject) => {
  reject("hi");
});
let p3 = new Promise((resolve, reject) => {
  reject("hi");
});
let p4 = new Promise((resolve, reject) => {
  resolve("hi");
});
Promise.all([p1, p4]).then((result) => {
  console.log(result);
});
