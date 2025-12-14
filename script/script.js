const images = document.querySelectorAll(".project-img");

// Create modal elements dynamically (only one modal for all images)
const modal = document.createElement("div");
modal.className = "modal";

const modalImg = document.createElement("img");
modalImg.className = "modal-content";

const caption = document.createElement("div");
caption.id = "caption";

const closeBtn = document.createElement("span");
closeBtn.className = "close";
closeBtn.innerHTML = "&times;";

// Append everything to the modal
modal.appendChild(closeBtn);
modal.appendChild(modalImg);
modal.appendChild(caption);
document.body.appendChild(modal);

// Add click events for each image
images.forEach((images) => {
  images.style.cursor = "pointer";
  images.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = images.src;
    caption.textContent = images.alt;
  });
});

// Close modal when clicking the close button or background

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    commentModal.style.display = "none";
  });
  let Close = document.getElementById("close");
  Close.addEventListener("click", () => {
    commentModal.style.display = "none";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  const commentModal = document.getElementById("comment-modal");
  commentModal.addEventListener("click", (e) => {
    if (e.target === commentModal) commentModal.style.display = "none";
  });
// Inject CSS for modal styling
const style = document.createElement("style");
style.textContent = `
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.85);
    padding-top: 60px;
  }
  .modal-content {
    display: block;
    margin: auto;
    width: 80%;
    max-width: 600px;
    border-radius: 8px;
    animation: zoom 0.3s;
  }
  #caption {
    margin: 15px auto;
    text-align: center;
    color: #f1f1f1;
    font-size: 18px;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
  }
  .close:hover {
    color: #bbb;
  }
  @keyframes zoom {
    from {transform: scale(0)}
    to {transform: scale(1)}
  }
`;
document.head.appendChild(style);

// const header = document.getElementById("navbar");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });
// 	const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('nav-menu');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
// navMenu.classList.toggle('active');
//   console.log('hambuger has been clicked')
// });
// function toggleMenu() {
//   document.getElementById("menu").classList.toggle("active");
// }

// function toggleDropdown(element) {
//   const dropdown = element.nextElementSibling;
//   dropdown.classList.toggle("active");
// }
// let information = [
//   {
//     name: "Roof Coating and Installation",
//     content:
//       "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
//     font: "fa-solid fa-screwdriver-wrench",
//   },
//   {
//     name: "Roof Shading and Installation",
//     content:
//       "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
//     font: "fa-solid fa-sack-dollar",
//   },
//   {
//     name: "Roof Repairing and Installation",
//     content:
//       "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
//     font: "fa-solid fa-rocket",
//   },
//   {
//     name: "Roof Leak Repair and Installation",
//     content:
//       "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
//     font: "fa-solid fa-trophy",
//   },
//   {
//     name: "Emergency Repair and Installation",
//     content:
//       "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
//     font: "fa-solid fa-screwdriver-wrench",
//   },
//   {
//     name: "Roof Management and Installation",
//     content:
//       "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
//     font: "fa-solid fa-rocket",
//   },
//   {
//     name: "Roof Replacement and Installation",
//     content:
//       "Lay a row of starter shingles down both sides of the roof as well and secure those in place using roofing nails...",
//     font: "fa-solid fa-screwdriver-wrench",
//   },
// ];
// console.log(information[5].content);
// let textInput = document.getElementById("roofing-text");
// let headInput = document.getElementById("roofing-head");
// let icon = document.getElementById("font-icon");
// const myFunction = (index) => {
//   textInput.textContent = information[index].content;
//   headInput.textContent = information[index].name;
//   icon.className = information[index].font;
//   icon.classList.add("icon");
// };

// // Attach both your existing function and CSS change logic
// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll(".rooting-button");

//   buttons.forEach((btn) => {
//     btn.addEventListener("click", function (e) {
//       // Remove active from all
//       buttons.forEach((b) => b.classList.remove("active"));

//       // Add active to clicked button
//       btn.classList.add("active");

//       // NOTE: your inline onclick (myFunction1/myFunction2/...) will still run
//       // because it is attached in HTML. We do NOT call those here.
//     });
//   });
// });
// let managersText = [
//   {
//     name: "John Deo",
//     content:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here",
//   },
//   {
//     name: "Eliza Klaus",
//     content:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.",
//   },
//   {
//     name: "Helly Miller",
//     content:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
//   },
//   {
//     name: "Marie Doe",
//     content:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here",
//   },
// ];
// const managerAbout = (element) => {
//   let managersName = document.getElementById("name");
//   let managersAbout = document.getElementById("about-text");
//   let managersAboutName = document.getElementById("about-name");
//   managersAbout.textContent = managersText[element].content;
//   managersAboutName.textContent = "About" + " " + managersText[element].name;
//   managersName.textContent = managersText[element].name;
// };
// // Select all images with the class "myImg"
// const images = document.querySelectorAll(".project-img");

// // Create modal elements dynamically (only one modal for all images)
// const modal = document.createElement("div");
// modal.className = "modal";

// const modalImg = document.createElement("img");
// modalImg.className = "modal-content";

// const caption = document.createElement("div");
// caption.id = "caption";

// const closeBtn = document.createElement("span");
// closeBtn.className = "close";
// closeBtn.innerHTML = "&times;";

// // Append everything to the modal
// modal.appendChild(closeBtn);
// modal.appendChild(modalImg);
// modal.appendChild(caption);
// document.body.appendChild(modal);

// // Add click events for each image
// images.forEach((images) => {
//   images.style.cursor = "pointer";
//   images.addEventListener("click", () => {
//     modal.style.display = "block";
//     modalImg.src = images.src;
//     caption.textContent = images.alt;
//   });
// });

// // Close modal when clicking the close button or background
// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
// });
// modal.addEventListener("click", (e) => {
//   if (e.target === modal) modal.style.display = "none";
// });

// // Inject CSS for modal styling
// const style = document.createElement("style");
// style.textContent = `
//   .modal {
//     display: none;
//     position: fixed;
//     z-index: 1000;
//     left: 0; top: 0;
//     width: 100%; height: 100%;
//     background: rgba(0, 0, 0, 0.85);
//     padding-top: 60px;
//   }
//   .modal-content {
//     display: block;
//     margin: auto;
//     width: 80%;
//     max-width: 600px;
//     border-radius: 8px;
//     animation: zoom 0.3s;
//   }
//   #caption {
//     margin: 15px auto;
//     text-align: center;
//     color: #f1f1f1;
//     font-size: 18px;
//   }
//   .close {
//     position: absolute;
//     top: 20px;
//     right: 35px;
//     color: #f1f1f1;
//     font-size: 40px;
//     font-weight: bold;
//     cursor: pointer;
//   }
//   .close:hover {
//     color: #bbb;
//   }
//   @keyframes zoom {
//     from {transform: scale(0)}
//     to {transform: scale(1)}
//   }
// `;
// document.head.appendChild(style);
// const testimonials = [
//   {
//     quote:
//       "Pellentesque mattis pharetra blandit in metus at nibh posuere mattis non et ex. Nulla facilisi. Duis congue sodales tortor utrum congue sem rhé quis. Integer porta viverra exvol. Duis eget rutrum ligula. Phasellus pretium porta feugiat sem id sagittis.",
//     name: "Hitesh Mahavar",
//     job: "Wp Organic",
//     photo: "images/client-1.jpg",
//   },
//   {
//     quote:
//       "Amazing service and professional team! They fixed our roof in no time and the result is perfect. Highly recommend Chhapru to anyone needing roof repairs.",
//     name: "Sarah Johnson",
//     job: "Homeowner",
//     photo: "images/client-2.jpg",
//   },
//   {
//     quote:
//       "Best roofing company in town. Transparent pricing, fast response, and excellent craftsmanship. Will definitely use again!",
//     name: "Michael Chen",
//     job: "Property Manager",
//     photo: "images/client-1.jpg",
//   },
// ];

// let current = 0;

// function changeTestimonial(direction) {
//   current = (current + direction + testimonials.length) % testimonials.length;
//   updateTestimonial();
// }

// function updateTestimonial() {
//   const t = testimonials[current];
//   document.querySelector(".quote").textContent = t.quote;
//   document.querySelector(".client-name").textContent = t.name;
//   document.querySelector(".client-job").textContent = t.job;
//   document.querySelector(".client-photo").src = t.photo;
// }

// // Auto-rotate every 6 seconds
// setInterval(() => changeTestimonial(1), 6000);
// const backToTop = document.getElementById("backToTop");
// window.addEventListener("scroll", () => {
//   backToTop.classList.toggle("show", window.scrollY > 300);
// });
// backToTop.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });
