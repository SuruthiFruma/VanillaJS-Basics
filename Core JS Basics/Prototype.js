function User(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    console.log("name is", this.name);
  };
}
User.prototype.city = "Nyc";
User.prototype.getAge = function () {
  console.log("age", this.age);
};
var user1 = new User("ABC", 20);
console.log("user1", user1);
user1.getName();
console.log("city", user1.city);
user1.getAge();

let user2 = new User("XYZ", 22);
user2.hi = "hi";
console.log("user2", user2);
