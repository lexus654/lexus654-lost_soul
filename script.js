"use strict";
const triangle = document.querySelector(".triangle");
const triangleID = document.getElementById("triangle");
const container = document.getElementById("container");
const screen2 = document.getElementById("screen-2");
let condition = false;
console.log(condition);

// This function will change the background of the rectangle
const changeBackground = function (id, color) {
  document.getElementById(`${id}`).style.backgroundColor = `${color}`;
};
// this function change the text color
const changeFontColor = function (id, color) {
  document.getElementById(`${id}`).style.color = `${color}`;
};
// this function
const transition = function (id, time = "1.3s") {
  document.getElementById(`${id}`).style.transition = `all ${time}`;
};
// this function moves up
const transformTranslateY = function (id) {
  document.getElementById(`${id}`).style.transform = "translateY(-80px)";
};
// click event//////////////////////////////////////////////////////////////////////////
triangle.addEventListener("click", function () {
  // rect div box
  changeBackground("rect", "#6D72C3 ");
  transition("rect");
  // container box
  transformTranslateY("container");
  transition("container");
  //   triangle
  triangleID.style.transform = "rotate(90deg)";
  transition("triangle");
  condition = true;
  console.log(condition);

  //   phase2 div
  //   transformTranslateY("phase2");
  if (condition === true) {
    setTimeout(() => {
      document.getElementById(`screen-2`).style.opacity = "10";
      transition("screen-2", "2s");
      console.log(condition);
    }, 1000);
  }
});
