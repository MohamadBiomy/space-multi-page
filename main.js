// DOM elements 
const burger = document.querySelector(".burger")
const nav = document.querySelector("nav")
const destinationsTabs = document.querySelectorAll(".tabs span")

// Variables





// Burger menu
burger.addEventListener("click", () => {
  if (burger.classList.contains("close")) {
    burger.classList.remove("close")
    nav.classList.remove("show")
  } else {
    burger.classList.add("close")
    nav.classList.add("show")
  }
})

// Destinations tabs
toggleClass(destinationsTabs, "active")


// functions 
function toggleClass(elements, className) {
  elements.forEach(element => {
    element.addEventListener("click", () => {
      elements.forEach(ele => ele.classList.remove(className))
      element.classList.add("active")
    })
  });
}