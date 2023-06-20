let user = {
  name: "ABC",
  age: 20,
};
let user2 = {
  name: "XYZ",
  age: 22,
};
function getInfo(city, country) {
  console.log(this.name, this.age, city, country);
}

let ans = getInfo.bind(user2, "Nepal", "India");
ans();
