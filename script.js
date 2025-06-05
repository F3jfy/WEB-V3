document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.getElementById('about-link').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('home-link').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('contact-link').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

  // Lightbox
   window.openLightbox = function(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');

    // Close with the close button
    closeBtn.onclick = function(event) {
      event.stopPropagation();
      lightbox.classList.remove('active');
    };

    // Close when clicking outside the image
    lightbox.onclick = function(event) {
      if (event.target === lightbox) {
        lightbox.classList.remove('active');
      }
    };
    document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('lightbox').classList.remove('active');
  }
});
  };

  

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1
  });

  reveals.forEach(reveal => {
      observer.observe(reveal);
  });
});

// script.js

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar'); // Get the navbar element

    if (hamburger && navLinks && navbar) { // Check if all elements exist
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            navbar.classList.toggle('active'); // Toggle 'active' class on the navbar
        });

        // Optional: Close the menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                navbar.classList.remove('active'); // Remove 'active' from navbar too
            });
        });
    } else {
        console.warn("One or more navigation elements (hamburger, nav links, or navbar) not found. Check your HTML selectors.");
    }
});
