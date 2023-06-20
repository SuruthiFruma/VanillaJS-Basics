let user = {
  name: "ABC",
  age: 20,
};
let user2 = {
  name: "XYZ",
  age: 22,
};
function getInfo(hometown, country) {
  console.log(this.name, this.age, hometown, country);
}
getInfo.apply(user2, ["Nepal", "India"]);
