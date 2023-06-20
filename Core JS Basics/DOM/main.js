document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked!");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
  },
  true
);
