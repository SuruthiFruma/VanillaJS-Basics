let user = {
  name: "ABC",
  age: 20,
};
let user2 = {
  name: "XYZ",
  age: 22,
};
function getInfo(city, country) {
  console.log(
    "HI IM" + this.name + "AT" + this.age + "LIVING IN" + city + country
  );
}

getInfo.call(user2, "Nepal", "INDIA");
