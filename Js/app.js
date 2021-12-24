/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
let sections = document.querySelectorAll("section");

// build the nav
let index = 1;
let navList = document.getElementById("navbar__list");
function addSection(name) {
  let nav = document.createElement("li"); //creat section navigator
  // creat link with section
  let link = document.createElement("a");
  link.href = "#section" + index;
  link.title = "Section " + index;
  let navTitle = document.createTextNode(name);
  index += 1;

  //append anchor to li then append li to ul
  nav.appendChild(link);
  link.appendChild(navTitle);
  navList.appendChild(nav);
  let a = document.querySelectorAll("a");
  a.forEach((item) => {
    item.setAttribute("class", "menu__link"); //adding attribute to get CSS styling for nav_list
  });
}

//dynamic build of navigation bar according to adding or removing section
for (let i = 0; i < sections.length; i++) {
  addSection(sections[i].getElementsByTagName("h2")[0].innerHTML); //create name of section from h2
}

// Add class 'active' to section when near top of viewport
// window.onscroll = function () {
//   sections.forEach((section) => {
//     if (
//       section.getBoundingClientRect().top <= 150 &&
//       section.getBoundingClientRect().top >= -410
//     ) {
//       section.classList.add("your-active-class");
//     } else {
//       section.classList.remove("your-active-class");
//     }
//   });
// };

// Scroll to anchor href smoothly using scrollIntoView event
const links = document.querySelectorAll("a");
links.forEach((link) => {
  let href = link.getAttribute("href");
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  });
});

// active nav menu with scroll
// Add class 'active' to section when near top of viewport
function navHighlight() {
  let length = sections.length;
  while (--length && window.scrollY + 100 < sections[length].offsetTop) {}
  for (li of links) {
    li.classList.remove("active");
  }
  sections.forEach((section) => {
    section.classList.remove("your-active-class");
  });
  links[length].classList.add("active");
  sections[length].classList.add("your-active-class");
}
window.addEventListener("scroll", navHighlight);

/*
 * End Main Functions
 */
