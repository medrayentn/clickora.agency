// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu functionality
const btnMenu = document.getElementById('btnMenu');
const mobileNav = document.createElement('div');
mobileNav.className = 'mobile-nav';
const overlay = document.createElement('div');
overlay.className = 'overlay';

// Create mobile menu content
mobileNav.innerHTML = `
  <button class="close-menu">
    <i class="fas fa-times"></i>
  </button>
  <a href="#services">Services</a>
  <a href="#projects">Projects</a>
  <a href="#packages">Our Packages</a>
  <a href="#ourTeam">Our Team</a>
  <a href="#contact">Contact</a>
`;

document.body.appendChild(mobileNav);
document.body.appendChild(overlay);

btnMenu.addEventListener('click', function() {
  mobileNav.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

const closeMenu = document.querySelector('.close-menu');
closeMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking on links
const mobileLinks = mobileNav.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

function closeMobileMenu() {
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}



// 


// Service items animation
function animateServices() {
  const serviceItems = document.querySelectorAll('.service-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  serviceItems.forEach(item => {
    observer.observe(item);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', animateServices);


// 


// Project cards animation
function animateProjects() {
  const projectCards = document.querySelectorAll('.Project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation with a delay based on index
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });
  
  projectCards.forEach(card => {
    observer.observe(card);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', animateProjects);

// Update project counter
function updateProjectCounter() {
  const visibleProjects = document.querySelectorAll('.Project-card[style*="display: block"]').length;
  const totalProjects = document.querySelectorAll('.Project-card').length;
  
  const counterElement = document.querySelector('.project-counter');
  if (counterElement) {
    counterElement.textContent = `Showing ${visibleProjects} of ${totalProjects} projects`;
  }
}

// Update counter when filtering
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Wait for the filter animation to complete
    setTimeout(updateProjectCounter, 300);
  });
});

// Initialize counter on page load
document.addEventListener('DOMContentLoaded', updateProjectCounter);



// 


// Package cards animation
function animatePackages() {
  const packageCards = document.querySelectorAll('.package-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation with a delay based on index
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });
  
  packageCards.forEach(card => {
    observer.observe(card);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', animatePackages);



// 


// Team members animation
function animateTeamMembers() {
  const teamMembers = document.querySelectorAll('#ourTeam .content .profile');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation with a delay based on index
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });
  
  teamMembers.forEach(member => {
    observer.observe(member);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', animateTeamMembers);


// 


//------------------------ Loader
// Hide loader when page is fully loaded
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
    setTimeout(() => {
        loader.style.display = "none";
    }, 500); // Match CSS transition duration
});

//-------------------------Loader(Project Filter)
// Filter logic with spinner
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".Project-card");
const loader = document.getElementById("loader");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Show loader
        loader.style.display = "flex";
        loader.classList.add("active");
        loader.classList.remove("hidden");

        // Get filter value
        const filter = button.getAttribute("data-filter");

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // Hide loader after 0.8s
        setTimeout(() => {
            loader.classList.add("hidden");
            setTimeout(() => {
                loader.style.display = "none";
                loader.classList.remove("active");
            }, 500); // Match CSS transition duration
        }, 800); // Brief delay for spinner
    });
});

//---------------------End Filter Loader



// 



// Footer newsletter functionality
document.addEventListener('DOMContentLoaded', function() {
  const newsletterBtn = document.querySelector('.footer-newsletter-btn');
  
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function() {
      const emailInput = document.querySelector('.footer-newsletter-input');
      const email = emailInput.value.trim();
      
      if (validateEmail(email)) {
        // Use your existing subscribeNewsletter function
        document.getElementById('email_newsletter').value = email;
        subscribeNewsletter();
        emailInput.value = '';
      } else {
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter a valid email address.';
        document.body.appendChild(errorNotification);

        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
      }
    });
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});


// 


// Scroll progress indicator
document.addEventListener('DOMContentLoaded', function() {
  const scrollProgress = document.getElementById('scrollProgress');
  
  if (scrollProgress) {
    window.addEventListener('scroll', function() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;
      
      scrollProgress.style.width = scrollPercentage + '%';
    });
  }
  
  // Hide scrollbar when modal is open
  const modal = document.getElementById('projectModal');
  if (modal) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
          document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
        }
      });
    });
    
    observer.observe(modal, { attributes: true });
  }
});


// 



// Scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  
});