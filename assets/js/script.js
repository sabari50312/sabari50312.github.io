"use strict";
const fs = require("fs");

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// send mail

// function sendmail(form) {
//   let name = form.name.value;
//   let email = form.email.value;
//   let message = form.message.value;
//   console.log("\n NAME:", name, "EMAIL: ", email, "\n\n\n");
//   // window.alert(name, mail, message, "being sent");
//   // fs.writeFile("Output.txt", data, (err) => {
//   //   if (err) throw err;
//   // });
// }
