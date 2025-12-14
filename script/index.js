const header = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}
function toggleDropdown(element) {
  const dropdown = element.nextElementSibling;
  dropdown.classList.toggle("active");
 }
let information = [
  {
    name: "Roof Coating and Installation",
    content:
      "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
    font: "fa-solid fa-screwdriver-wrench",
  },
  {
    name: "Roof Shading and Installation",
    content:
      "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
    font: "fa-solid fa-sack-dollar",
  },
  {
    name: "Roof Repairing and Installation",
    content:
      "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
    font: "fa-solid fa-rocket",
  },
  {
    name: "Roof Leak Repair and Installation",
    content:
      "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
    font: "fa-solid fa-trophy",
  },
  {
    name: "Emergency Repair and Installation",
    content:
      "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
    font: "fa-solid fa-screwdriver-wrench",
  },
  {
    name: "Roof Management and Installation",
    content:
      "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
    font: "fa-solid fa-rocket",
  },
  {
    name: "Roof Replacement and Installation",
    content:
      "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
    font: " fa-solid fa-screwdriver-wrench",
  },
];
console.log(information[5].content);
let textInput = document.getElementById("roofing-text");
let headInput = document.getElementById("roofing-head");
let icon = document.getElementById("font-icon");
const myFunction = (index) => {
  textInput.textContent = information[index].content;
  headInput.textContent = information[index].name;
  icon.className = information[index].font;
  icon.classList.add("icon");
};

// Attach both your existing function and CSS change logic
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".rooting-button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // Remove active from all
      buttons.forEach((b) => b.classList.remove("active"));

      // Add active to clicked button
      btn.classList.add("active");

      // NOTE: your inline onclick (myFunction1/myFunction2/...) will still run
      // because it is attached in HTML. We do NOT call those here.
    });
  });
});
let managersText = [
  {
    name: "John Deo",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here",
  },
  {
    name: "Eliza Klaus",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.",
  },
  {
    name: "Helly Miller",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
  },
  {
    name: "Marie Doe",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here",
  },
];
const managerAbout = (element) => {
  let managersName = document.getElementById("name");
  let managersAbout = document.getElementById("about-text");
  let managersAboutName = document.getElementById("about-name");
  managersAbout.textContent = managersText[element].content;
  managersAboutName.textContent = "About" + " " + managersText[element].name;
  managersName.textContent = managersText[element].name;
};
// Select all images with the class "myImg"
const testimonials = [
  {
    quote:
      "Best roofing company in town. Transparent pricing, fast response, and excellent craftsmanship. Will definitely use again.",
    name: "Hitesh Mahavar",
    job: "Wp Organic",
    photo: "images/client-1.jpg",
  },
  {
    quote:
      "Amazing service and professional team! They fixed our roof in no time and the result is perfect. Highly recommend Chhapru to anyone needing roof repairs.",
    name: "Sarah Johnson",
    job: "Homeowner",
    photo: "images/client-2.jpg",
  },
  {
    quote:
      "Best roofing company in town. Transparent pricing, fast response, and excellent craftsmanship. Will definitely use again!",
    name: "Michael Chen",
    job: "Property Manager",
    photo: "images/client-1.jpg",
  },
];

let current = 0;

if (document.querySelector('.quote')) {
  function changeTestimonial(direction) {
  current = (current + direction + testimonials.length) % testimonials.length;
  updateTestimonial();
}
}


function updateTestimonial() {
  const t = testimonials[current];
  document.querySelector(".quote").textContent = t.quote;
  document.querySelector(".client-name").textContent = t.name;
  document.querySelector(".client-job").textContent = t.job;
  document.querySelector(".client-photo").src = t.photo;
}
// Auto-rotate every 6 seconds
if (document.querySelector(".quote")) {
  setInterval(() => changeTestimonial(1), 6000);
}

const backToTop = document.getElementById("backToTop");
console.log(backToTop);
if (backToTop) {
  backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
}
const blogBtn = document.querySelectorAll(".blog-stats");
console.log(blogBtn);
blogBtn.forEach((blogBtn) => {
  blogBtn.addEventListener("click", () => {
    commentModal.style.display = "flex";
  });
});
