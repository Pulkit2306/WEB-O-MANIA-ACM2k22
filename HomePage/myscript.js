"use strict";
const login = document.querySelector(".LogForm");
const closeButton = document.querySelector(".cross");
console.log(closeButton);
const loginImage = document.querySelector("#login");
const openForm = function () {
  login.classList.remove("Hidden");
};
const closeForm = function () {
  login.classList.add("Hidden");
};
loginImage.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
