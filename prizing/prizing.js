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

// Gallery dropdown menu interactions
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle")
  const menu = dropdown.querySelector(".dropdown-menu")

  dropdown.addEventListener("mouseenter", () => {
    menu.style.opacity = "1"
    menu.style.visibility = "visible"
    menu.style.transform = "translateY(0)"
  })

  dropdown.addEventListener("mouseleave", () => {
    menu.style.opacity = "0"
    menu.style.visibility = "hidden"
    menu.style.transform = "translateY(-10px)"
  })

  // Handle dropdown toggle click for mobile
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      const isOpen = menu.classList.contains("mobile-open")

      // Close all other dropdowns
      document.querySelectorAll(".dropdown-menu").forEach((m) => {
        m.classList.remove("mobile-open")
        m.style.display = "none"
      })

      if (!isOpen) {
        menu.classList.add("mobile-open")
        menu.style.display = "block"
        menu.style.opacity = "1"
        menu.style.visibility = "visible"
        menu.style.transform = "translateY(0)"
      }
    }
  })
})

// Gallery dropdown sub-menu link interactions
document.querySelectorAll(".dropdown-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href")

    // If it's a hash link, prevent default and scroll
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      scrollToSection(targetId)
    }
    // For external gallery pages, you can add custom handling here
    // For now, they will navigate normally to the specified HTML files
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






// WhatsApp booking functionality
function bookOnWhatsApp(packageName, price) {
    const phoneNumber = "919791438860"; // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in the ${packageName} package (${price}). Could you please provide more information and help me get started?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Add a subtle animation to the clicked button
    const clickedButton = event.target.closest('.cta-button');
    clickedButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        clickedButton.style.transform = '';
    }, 150);
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Track the booking attempt (you can integrate with analytics)
    trackBookingAttempt(packageName, price);
}

// Analytics tracking function
function trackBookingAttempt(packageName, price) {
    console.log(`Booking attempt: ${packageName} - ${price}`);
    // You can integrate with Google Analytics, Facebook Pixel, etc.
    // Example: gtag('event', 'booking_attempt', { package: packageName, price: price });
}

// Add interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.pricing-card');
    
    cards.forEach(card => {
        // Add mouse enter effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        // Add mouse leave effect
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect for the entire card
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.cta-button')) {
                const button = this.querySelector('.cta-button');
                button.style.background = 'linear-gradient(135deg, #d35400, #c0392b)';
                setTimeout(() => {
                    button.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
                }, 200);
            }
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Add floating animation to price badges
    const priceBadges = document.querySelectorAll('.price-badge');
    priceBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.animation = 'pulse 2s infinite';
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('cta-button')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add error handling for WhatsApp functionality
window.addEventListener('error', function(e) {
    if (e.message.includes('WhatsApp')) {
        console.error('WhatsApp booking error:', e);
        alert('There was an issue opening WhatsApp. Please try again or contact us directly.');
    }
});