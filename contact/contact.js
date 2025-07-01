 const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      .then(response => {
        if (response.ok) {
          successMessage.style.display = "block";
          form.reset();
          setTimeout(() => {
            location.reload();
          }, 3000);
        } else {
          alert("There was a problem. Please try again.");
        }
      })
      .catch(error => {
        alert("Something went wrong.");
        console.error(error);
      });
    });
    // Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")

  const bars = hamburger.querySelectorAll(".bar")
  if (hamburger.classList.contains("active")) {
    bars[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    bars[1].style.opacity = "0"
    bars[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    bars[0].style.transform = "none"
    bars[1].style.opacity = "1"
    bars[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Add click event listeners to navigation links
document.querySelectorAll('.nav-link[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})


// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.background = "#fff"
    navbar.style.backdropFilter = "none"
  }
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})
// Animate on scroll functionality
function animateOnScroll() {
  const elements = document.querySelectorAll("[data-aos]")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("aos-animate")
    }
  })
}

window.addEventListener("scroll", animateOnScroll)
window.addEventListener("load", animateOnScroll)

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate")
    }
  })
}, observerOptions)

document.querySelectorAll("[data-aos]").forEach((el) => {
  observer.observe(el)
})

// Scroll to top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

const scrollTopBtn = document.createElement("button")
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
scrollTopBtn.className = "scroll-top-btn"
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #f4d03f;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 15px rgba(244, 208, 63, 0.3);
`

document.body.appendChild(scrollTopBtn)
scrollTopBtn.addEventListener("click", scrollToTop)

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.style.opacity = "1"
    scrollTopBtn.style.visibility = "visible"
  } else {
    scrollTopBtn.style.opacity = "0"
    scrollTopBtn.style.visibility = "hidden"
  }
})

// Mobile menu toggle for navbar
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

