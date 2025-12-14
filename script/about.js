// let chevronDown = document.getElementById("chev");
// let chevDownTwo = document.getElementById("chev-two");
// let chevDownThree = document.getElementById("chev-three");
// let chevDownFour = document.getElementById("chev-four");
// let chevFunction = () => {
//   console.log(chevronDown.classList);
//   chevronDown.classList.toggle("fa-chevron-down");
//   chevronDown.classList.toggle("fa-chevron-up");
//   console.log(chevronDown.classList);
// };
// console.log("hello");
// // function toggleDropdown(element) {
// //   const dropdown = element.nextElementSibling;
// //   dropdown.classList.toggle("active");
// //   chevFunction();
// // }

// chevronDown.addEventListener("click", () => {
//   console.log("hello world");
//   const dropdown = chevronDown.nextElementSibling;
//   console.log(dropdown);
//   console.log("show profile");
//   dropdown.classList.toggle("active");
// });

let roofingInformation = [
  {
    less: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam quisquam odio expedita accusantium! Repellendus, amet animi? Modi odit dolores unde adipisci assumenda atque totam voluptatum itaque suscipit labore consequatur tempora et cupiditate hic praesentium in laudantium cum fugit eius, rem consequuntur temporibus maxime excepturi molestiae. Autem qui voluptatem rerum hic animi, soluta, molestiae minima ex nemo necessitatibus sequi facere. Eligendi neque quas iusto excepturi odio esse laboriosam officia molestias ex saepe quidem autem eum, repudiandae quod expedita consectetur laudantium, aspernatur possimus numquam, sequi architecto eveniet. Natus enim odio provident, debitis expedita ipsam magni in, culpa nobis, delectus facere quae.",
    more: "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ea iusto incidunt unde odit totam veniam culpa similique asperiores sunt, laborum quod dicta aliquid quis, modi officia possimus suscipit aperiam labore minima rerum. Est nisi ex in quam aliquam enim odio, distinctio alias error. Doloremque velit delectus, suscipit fugiat placeat assumenda inventore nihil? Fuga ea provident quidem nihil quod! Possimus excepturi temporibus, eveniet cum saepe quibusdam itaque corrupti sed dolorum eligendi deleniti impedit eum ea ut officiis fugiat voluptas quos aspernatur rem maiores. Doloribus recusandae natus beatae nostrum voluptatibus, sit voluptates numquam fugit molestiae blanditiis rerum deserunt, eaque accusantium dolorem accusamus qui deleniti praesentium quidem, saepe at! Nam assumenda odio rerum est consequatur laborum, explicabo tenetur dolorem! Quia ipsum repudiandae eveniet tempore commodi suscipit molestiae laborum, laboriosam ullam tenetur voluptas at animi adipisci cum qui mollitia laudantium nihil, architecto odit enim. Voluptate consectetur est iste provident amet quibusdam ducimus magni?",
  },
  {
    less: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam quisquam odio expedita accusantium! Repellendus, amet animi? Modi odit dolores unde adipisci assumenda atque totam voluptatum itaque suscipit labore consequatur tempora et cupiditate hic praesentium in laudantium cum fugit eius, rem consequuntur temporibus maxime excepturi molestiae. Autem qui voluptatem rerum hic animi, soluta, molestiae minima ex nemo necessitatibus sequi facere. Eligendi neque quas iusto excepturi odio esse laboriosam officia molestias ex saepe quidem autem eum, repudiandae quod expedita consectetur laudantium, aspernatur possimus numquam, sequi architecto eveniet. Natus enim odio provident, debitis expedita ipsam magni in, culpa nobis, delectus facere quae.",
    more: "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ea iusto incidunt unde odit totam veniam culpa similique asperiores sunt, laborum quod dicta aliquid quis, modi officia possimus suscipit aperiam labore minima rerum. Est nisi ex in quam aliquam enim odio, distinctio alias error. Doloremque velit delectus, suscipit fugiat placeat assumenda inventore nihil? Fuga ea provident quidem nihil quod! Possimus excepturi temporibus, eveniet cum saepe quibusdam itaque corrupti sed dolorum eligendi deleniti impedit eum ea ut officiis fugiat voluptas quos aspernatur rem maiores. Doloribus recusandae natus beatae nostrum voluptatibus, sit voluptates numquam fugit molestiae blanditiis rerum deserunt, eaque accusantium dolorem accusamus qui deleniti praesentium quidem, saepe at! Nam assumenda odio rerum est consequatur laborum, explicabo tenetur dolorem! Quia ipsum repudiandae eveniet tempore commodi suscipit molestiae laborum, laboriosam ullam tenetur voluptas at animi adipisci cum qui mollitia laudantium nihil, architecto odit enim. Voluptate consectetur est iste provident amet quibusdam ducimus magni?",
  },
  {
    less: "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam quisquam odio expedita accusantium! Repellendus, amet animi? Modi odit dolores unde adipisci assumenda atque totam voluptatum itaque suscipit labore consequatur tempora et cupiditate hic praesentium in laudantium cum fugit eius, rem consequuntur temporibus maxime excepturi molestiae. Autem qui voluptatem rerum hic animi, soluta, molestiae minima ex nemo necessitatibus sequi facere. Eligendi neque quas iusto excepturi odio esse laboriosam officia molestias ex saepe quidem autem eum, repudiandae quod expedita consectetur laudantium, aspernatur possimus numquam, sequi architecto eveniet. Natus enim odio provident, debitis expedita ipsam magni in, culpa nobis, delectus facere quae.",
    more: "6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ea iusto incidunt unde odit totam veniam culpa similique asperiores sunt, laborum quod dicta aliquid quis, modi officia possimus suscipit aperiam labore minima rerum. Est nisi ex in quam aliquam enim odio, distinctio alias error. Doloremque velit delectus, suscipit fugiat placeat assumenda inventore nihil? Fuga ea provident quidem nihil quod! Possimus excepturi temporibus, eveniet cum saepe quibusdam itaque corrupti sed dolorum eligendi deleniti impedit eum ea ut officiis fugiat voluptas quos aspernatur rem maiores. Doloribus recusandae natus beatae nostrum voluptatibus, sit voluptates numquam fugit molestiae blanditiis rerum deserunt, eaque accusantium dolorem accusamus qui deleniti praesentium quidem, saepe at! Nam assumenda odio rerum est consequatur laborum, explicabo tenetur dolorem! Quia ipsum repudiandae eveniet tempore commodi suscipit molestiae laborum, laboriosam ullam tenetur voluptas at animi adipisci cum qui mollitia laudantium nihil, architecto odit enim. Voluptate consectetur est iste provident amet quibusdam ducimus magni?",
  },
  {
    less: "7Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam quisquam odio expedita accusantium! Repellendus, amet animi? Modi odit dolores unde adipisci assumenda atque totam voluptatum itaque suscipit labore consequatur tempora et cupiditate hic praesentium in laudantium cum fugit eius, rem consequuntur temporibus maxime excepturi molestiae. Autem qui voluptatem rerum hic animi, soluta, molestiae minima ex nemo necessitatibus sequi facere. Eligendi neque quas iusto excepturi odio esse laboriosam officia molestias ex saepe quidem autem eum, repudiandae quod expedita consectetur laudantium, aspernatur possimus numquam, sequi architecto eveniet. Natus enim odio provident, debitis expedita ipsam magni in, culpa nobis, delectus facere quae.",
    more: "8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ea iusto incidunt unde odit totam veniam culpa similique asperiores sunt, laborum quod dicta aliquid quis, modi officia possimus suscipit aperiam labore minima rerum. Est nisi ex in quam aliquam enim odio, distinctio alias error. Doloremque velit delectus, suscipit fugiat placeat assumenda inventore nihil? Fuga ea provident quidem nihil quod! Possimus excepturi temporibus, eveniet cum saepe quibusdam itaque corrupti sed dolorum eligendi deleniti impedit eum ea ut officiis fugiat voluptas quos aspernatur rem maiores. Doloribus recusandae natus beatae nostrum voluptatibus, sit voluptates numquam fugit molestiae blanditiis rerum deserunt, eaque accusantium dolorem accusamus qui deleniti praesentium quidem, saepe at! Nam assumenda odio rerum est consequatur laborum, explicabo tenetur dolorem! Quia ipsum repudiandae eveniet tempore commodi suscipit molestiae laborum, laboriosam ullam tenetur voluptas at animi adipisci cum qui mollitia laudantium nihil, architecto odit enim. Voluptate consectetur est iste provident amet quibusdam ducimus magni?",
  },
];
let readMore = document.getElementById("read-more-div");
let readLess = document.getElementById("read-less");
let readMoreA = () => {
  readMore.style.display = "none";
};
let readLessA = () => {
  readLess.style.display = "flex";
};
let readLessB = () => {
  readLess.style.display = "none";
};
let readMoreB = () => {
  readMore.style.display = "flex";
};
let roofingInformationDom = document.getElementById("roofing-information");
roofingInformationDom.textContent = roofingInformation[0].less;
let aboutBtn = document.getElementById("about");
let historyBtn = document.getElementById("history");
let missionBtn = document.getElementById("mission");
let visionBtn = document.getElementById("vision");
let detector = "";
let numericDetector;
aboutBtn.addEventListener("click", () => {
  readLessB();
  readMoreB();
  numericDetector = 0;
  anonymous();
  aboutBtn.classList.add("toggle");
  detector = "about";
  if (detector == "about") {
    console.log("its about to goo dooooown");
  } else {
    aboutBtn.classList.remove("toggle");
  }

  roofingInformationDom.textContent = roofingInformation[numericDetector].less;
  readMore.addEventListener("click", () => {
    roofingInformationDom.textContent =
      roofingInformation[numericDetector].more;
    readMoreA();
    readLessA();
  });
  readLess.addEventListener("click", () => {
    roofingInformationDom.textContent =
      roofingInformation[numericDetector].less;
    readLessB();
    readMoreB();
  });
});
historyBtn.addEventListener("click", () => {
  readLessB();
  readMoreB();
  numericDetector = 1;
  anonymous();
  historyBtn.classList.add("toggle");
  detector = "history";
  if (detector == "history") {
    console.log("its about to goo dooooown");
  } else {
    historyBtn.classList.remove("toggle");
  }

  roofingInformationDom.textContent = roofingInformation[numericDetector].less;
  readMore.addEventListener("click", () => {
    roofingInformationDom.textContent =
      roofingInformation[numericDetector].more;
    readMoreA();
    readLessA();
  });
  readLess.addEventListener("click", () => {
    roofingInformationDom.textContent =
      roofingInformation[numericDetector].less;
    readLessB();
    readMoreB();
  });
});
missionBtn.addEventListener("click", () => {
  readLessB();
  readMoreB();
  numericDetector = 2;
  anonymous();
  missionBtn.classList.add("toggle");
  detector = "mission";
  if (detector == "mission") {
    console.log("its about to goo dooooown");
  } else {
    missionBtn.classList.remove("toggle");
  }

  roofingInformationDom.textContent = roofingInformation[numericDetector].less;
  readMore.addEventListener("click", () => {
    roofingInformationDom.textContent =
      roofingInformation[numericDetector].more;
    readMoreA();
    readLessA();
  });
  readLess.addEventListener("click", () => {
    roofingInformationDom.textContent =
      roofingInformation[numericDetector].less;
    readLessB();
    readMoreB();
  });
});
visionBtn.addEventListener("click", () => {
  readLessB();
  readMoreB();
  numericDetector = 3;
  anonymous();
  visionBtn.classList.add("toggle");
  detector = "vision";
  if (detector == "vision") {
    console.log("its about to goo dooooown");
  } else {
    visionBtn.classList.remove("toggle");
  }

  roofingInformationDom.textContent = roofingInformation[numericDetector].less;
  readMore.addEventListener("click", () => {
    roofingInformationDom.textContent =
      roofingInformation[numericDetector].more;
    readMoreA();
    readLessA();
  });
  readLess.addEventListener("click", () => {
    roofingInformationDom.textContent =
      roofingInformation[numericDetector].less;
    readLessB();
    readMoreB();
  });
});
let anonymous = () => {
  if (
    missionBtn.classList == "toggle" ||
    historyBtn.classList == "toggle" ||
    visionBtn.classList == "toggle" ||
    (aboutBtn.classList == "toggle" && detector == "about")
  ) {
    visionBtn.classList.remove("toggle");
    historyBtn.classList.remove("toggle");
    missionBtn.classList.remove("toggle");
    aboutBtn.classList.remove("toggle");
  }
};
const cards = document.querySelectorAll(".expert-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

cards.forEach((card) => observer.observe(card));

let ampere = 0;
let changeAboutTestimonial = (direction) => { 
  ampere = (ampere + direction + testimonials.length) % testimonials.length;
  updateTestimonialAbout();
}
function updateTestimonialAbout() {
  const t = testimonials[ampere];
  document.querySelector(".quote-about").textContent = t.quote;
  document.querySelector(".client-name-about").textContent = t.name;
  document.querySelector(".client-job-about").textContent = t.job;
  document.querySelector(".client-photo-about").src = t.photo;
}
if (document.querySelector(".quote-about")) {
  setInterval(() => changeAboutTestimonial(1), 3000);
}