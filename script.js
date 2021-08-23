"use strict";
const triangle = document.querySelector(".triangle");
const triangleID = document.getElementById("triangle");
const container = document.getElementById("container");
const screen2 = document.getElementById("screen-2");
// this is the a tag
const loginScreen = document.getElementById("login-screen");
const signupScreen = document.getElementById("signUp-screen");

// this is the section tag
const loginScreenToggle = document.getElementById("loginScreen");
const homeScreenToggle = document.getElementById("homeScreen");
const signupScreenToggle = document.getElementById("signupScreen");
let condition = false;

// a tag in the login section
const goingToSignUp = document.getElementById("goingToSignUP");
// a tag in the sign up section
const goingToLogin = document.getElementById("goingToLogin");

// login to home
const loginGoBackHome = document.getElementById("loginGoBackHome");
// signup to home
const signupGoBackHome = document.getElementById("signupGoBackHome");

//
//
//
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
// this function is for opacity
const opacity = function (id, value) {
  document.getElementById(`${id}`).style.opacity = `${value}`;
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
      transition("screen-2", "1s");
      console.log(condition);
    }, 1000);
  }
});
// show up the log in screen
loginScreen.addEventListener("click", function () {
  console.log("Nagana");
  opacity("homeScreen", 0);
  transition("homeScreen");
  setTimeout(() => {
    homeScreenToggle.classList.add("home-toggler");
    loginScreenToggle.classList.remove("login-toggler");
    console.log("part2");
  }, 500);
  setTimeout(() => {
    opacity("loginScreen", 10);
    transition("loginScreen");
    console.log("part3");
  }, 1000);
  // comment
});
// show up the sign up screen
signupScreen.addEventListener("click", function () {
  console.log("Nagana");
  opacity("homeScreen", 0);
  transition("homeScreen");
  setTimeout(() => {
    homeScreenToggle.classList.add("home-toggler");
    signupScreenToggle.classList.remove("signup-toggler");
    console.log("part2");
  }, 500);
  setTimeout(() => {
    opacity("signupScreen", 10);
    transition("signupScreen");
    console.log("part3");
  }, 1000);
  // comment
});
signupGoBackHome.addEventListener("click", function () {
  console.log("Nagana");
  opacity("signupScreen", 0);
  transition("signupScreen");
  setTimeout(() => {
    homeScreenToggle.classList.remove("home-toggler");
    signupScreenToggle.classList.add("signup-toggler");
    console.log("part2");
  }, 500);
  setTimeout(() => {
    opacity("homeScreen", 10);
    transition("homeScreen");
    console.log("part3");
  }, 1000);
  // comment
});

// this is the a tag from the login section goin to sign up section
goingToSignUp.addEventListener("click", function () {
  console.log("Nagana");
  opacity("loginScreen", 0);
  transition("loginScreen");
  setTimeout(() => {
    loginScreenToggle.classList.add("login-toggler");
    signupScreenToggle.classList.remove("signup-toggler");
    console.log("part2");
  }, 500);
  setTimeout(() => {
    opacity("signupScreen", 10);
    transition("signupScreen");
    console.log("part3");
  }, 1000);
  // comment
});

// this is the a tag from the sign up section goin to login section
goingToLogin.addEventListener("click", function () {
  console.log("Nagana");
  opacity("signupScreen", 0);
  transition("signupScreen");
  setTimeout(() => {
    signupScreenToggle.classList.add("signup-toggler");
    loginScreenToggle.classList.remove("login-toggler");
    console.log("part2");
  }, 500);
  setTimeout(() => {
    opacity("loginScreen", 10);
    transition("loginScreen");
    console.log("part3");
  }, 1000);
  // comment
});

loginGoBackHome.addEventListener("click", function () {
  console.log("Nagana");
  opacity("loginScreen", 0);
  transition("loginScreen");
  setTimeout(() => {
    homeScreenToggle.classList.remove("home-toggler");
    loginScreenToggle.classList.add("login-toggler");
    console.log("part2");
  }, 500);
  setTimeout(() => {
    opacity("homeScreen", 10);
    transition("homeScreen");
    console.log("part3");
  }, 1000);
  // comment
});
