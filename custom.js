window.addEventListener("load", function () {
  document.getElementById("loadingMessage").style.display = "none";
});

// ******************NAVBAR***********************
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-button");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (mobileMenu.style.maxHeight) {
      // close menu
      mobileMenu.style.maxHeight = null;
    } else {
      // open menu
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    }
  });

  document.addEventListener("click", function (e) {
    if (!mobileMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      mobileMenu.style.maxHeight = null;
    }
  });
});

function reloadPage() {
  location.reload();
}
// // Commented for better readability*****************
// window.addEventListener('scroll', function () {
//   const navbar = document.querySelector('.navbar');
//   console.log('Scroll position:', window.scrollY);
//   if (window.scrollY > 0) {
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// });

// *********************************ABOUT***************************

// const imgs = [
//   "img/about4.jpg",
//   "img/about5.jpg",
//   "img/about6.jpg",
//   "img/about1.jpg",
//   "img/about2.jpg",
//   "img/about3.jpg",
//   "img/about0.jpg"
// ];

// let i = 0;

// function changeImg() {
//   const rollImg = document.getElementById("img");

//   if (rollImg) {

//     rollImg.onerror = () => {
//       console.error(`Image failed to load: ${imgs[i]}`);
//       i = (i + 1) % imgs.length;
//       rollImg.src = imgs[i];
//     };

//     rollImg.src = imgs[i];
//     i = (i + 1) % imgs.length;
//   } else {
//     console.error("Image element not found.");
//   }

//   setTimeout(changeImg, 2000);
// }

// changeImg();

window.addEventListener("scroll", function () {
  const aboutSection = document.querySelector("#about");
  const aboutPosition = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // If the about section is visible, add the active class
  if (aboutPosition <= windowHeight * 0.8) {
    aboutSection.classList.add("active");
  }
});

// *********************************PROPERTY***************************

window.addEventListener("scroll", function () {
  const propertySection = document.querySelector("#Property");
  const propertyBoxes = document.querySelectorAll(".property_box");
  const propertyPosition = propertySection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (propertyPosition <= windowHeight * 0.8) {
    propertySection.classList.add("active");
  }

  propertyBoxes.forEach((box, index) => {
    const boxPosition = box.getBoundingClientRect().top;
    if (boxPosition <= windowHeight * 0.8) {
      box.classList.add("active");
    }
  });
});

// *********************************CATAGORIES***************************

window.addEventListener("scroll", function () {
  const categoriesSection = document.querySelector("#categories");
  const propertyCards = document.querySelectorAll(".property-card");
  const gridItems = document.querySelectorAll(".grid-item");
  const countNumbers = document.querySelectorAll(".count_num");
  const categoriesPosition = categoriesSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Check if the categories section is in the viewport
  if (categoriesPosition <= windowHeight * 0.8) {
    categoriesSection.classList.add("active");
  }

  // Animate property cards, grid items, and count numbers individually
  propertyCards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    if (cardPosition <= windowHeight * 0.8) {
      card.classList.add("active");
    }
  });

  gridItems.forEach((item) => {
    const itemPosition = item.getBoundingClientRect().top;
    if (itemPosition <= windowHeight * 0.8) {
      item.classList.add("active");
    }
  });

  countNumbers.forEach((count) => {
    const countPosition = count.getBoundingClientRect().top;
    if (countPosition <= windowHeight * 0.8) {
      count.classList.add("active");
      // For counting numbers, animate the numbers incrementally
      const target = parseInt(count.getAttribute("data-target"));
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        count.textContent = current;
        if (current === target) {
          clearInterval(interval);
        }
      }, 50); // Update number every 50ms
    }
  });
});

// *********************************COUNTER***************************

//
// *********************************TESTIMONIALS***************************

window.addEventListener("scroll", function () {
  const testimonialSection = document.querySelector("#testimonial");
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const testimonialPosition = testimonialSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Check if the testimonial section is in the viewport
  if (testimonialPosition <= windowHeight * 0.8) {
    testimonialSection.classList.add("active");
  }

  // Animate testimonial cards when they enter the viewport
  testimonialCards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    if (cardPosition <= windowHeight * 0.8) {
      card.classList.add("active");
    }
  });
});

// *********************************FOOTER***************************

// Select all footer sections
const footerSections = document.querySelectorAll(".footer-section");

window.addEventListener("scroll", () => {
  footerSections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Trigger animation when section is visible
    if (sectionPosition <= windowHeight * 0.85) {
      section.classList.add("active");
    }
  });
});
