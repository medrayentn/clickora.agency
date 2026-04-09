// Enhanced project data with descriptions and metadata
const projectData = {
  project1: {
    title: 'LEGO Land Content Creation',
    description: 'Engaging LEGO-themed content created for a children\'s park to boost family visits and increase engagement through visually appealing social media content.',
    images: [
      { src: 'assets/image/projects/lego land/logo.jfif', alt: 'LEGO Land Logo' },
      { src: 'assets/image/projects/lego land/poster.jfif', alt: 'LEGO Land Poster' }
    ],
    videos: [
      { src: 'assets/image/projects/lego land/video1.mp4', alt: 'LEGO Land Video', type: 'video/mp4' }
    ],
    meta: {
      Category: 'Content Creation',
      Client: 'LEGO Land Park',
      Date: 'January 2024',
      Services: 'Visual Content, Video Production'
    }
  },
  project3: {
    title: 'Yakuza Clan Branding',
    description: 'Strategic content creation for Yakuza Clan to elevate their online gaming presence and establish a strong brand identity in the competitive gaming community.',
    images: [
      { src: 'assets/image/projects/yakuza clan/j.png', alt: 'Yakuza Clan Logo' },
      { src: 'assets/image/projects/yakuza clan/meeting_HOUR.png', alt: 'Yakuza Clan Meeting' }
    ],
    meta: {
      Category: 'Content Creation',
      Client: 'Yakuza Clan',
      Date: 'March 2024',
      Services: 'Brand Identity, Social Media Content'
    }
  },
  project4: {
    title: 'New Life Fitness Campaign',
    description: 'Comprehensive social media and influencer marketing campaign for New Life Fitness gym in Tunisia, designed to increase membership and brand awareness.',
    images: [
      { src: 'assets/image/projects/new life fitness/logo_grey.jpeg', alt: 'New Life Fitness Logo' },
      { src: 'assets/image/projects/new life fitness/logo_b.jpeg', alt: 'New Life Fitness Brand' },
      { src: 'assets/image/projects/new life fitness/t-shirt.jpeg', alt: 'New Life Fitness Merchandise' }
    ],
    meta: {
      Category: 'Marketing Strategy',
      Client: 'New Life Fitness',
      Date: 'February 2024',
      Services: 'Social Media Strategy, Influencer Marketing'
    }
  },
  project5: {
    title: 'CRM Dashboard Design',
    description: 'Modern and intuitive CRM dashboard design with a focus on user experience and functionality, created to streamline business operations and improve productivity.',
    images: [
      { src: 'assets/image/projects/CRM FrontEnd Design/1__authentification.png', alt: 'CRM Authentication' },
      { src: 'assets/image/projects/CRM FrontEnd Design/2__menu.png', alt: 'CRM Main Menu' },
      { src: 'assets/image/projects/CRM FrontEnd Design/3__menu.png', alt: 'CRM Navigation' },
      { src: 'assets/image/projects/CRM FrontEnd Design/4__popup.png', alt: 'CRM Popup' },
      { src: 'assets/image/projects/CRM FrontEnd Design/5__popup.png', alt: 'CRM Modal' },
      { src: 'assets/image/projects/CRM FrontEnd Design/6__menu.png', alt: 'CRM Interface' }
    ],
    meta: {
      Category: 'Web Development',
      Client: 'Confidential',
      Date: 'December 2023',
      Services: 'UI/UX Design, Frontend Development'
    }
  },
  // Add similar enhanced data for other projects...
};

// Enhanced modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.modal .close');
  const modalTitle = document.querySelector('.modal-title');
  const swiperSlides = document.getElementById('swiperSlides');
  const projectDescription = document.getElementById('projectDescription');
  const projectMeta = document.getElementById('projectMeta');
  let swiper;

  // Initialize Swiper
  function initializeSwiper() {
    if (swiper) {
      swiper.destroy(true, true);
    }
    
    swiper = new Swiper('.mySwiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 20,
      slidesPerView: 1,
      effect: 'slide',
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          spaceBetween: 30,
        },
      },
    });
  }

  // Open modal for clicked project
  document.querySelectorAll('.modal-pop').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = button.getAttribute('data-project-id');
      const project = projectData[projectId];
      
      if (project) {
        // Set modal title
        modalTitle.textContent = project.title;
        
        // Set project description
        projectDescription.textContent = project.description;
        
        // Set project metadata
        projectMeta.innerHTML = '';
        if (project.meta) {
          for (const [key, value] of Object.entries(project.meta)) {
            const metaItem = document.createElement('div');
            metaItem.className = 'meta-item';
            metaItem.innerHTML = `
              <span class="meta-label">${key}</span>
              <span class="meta-value">${value}</span>
            `;
            projectMeta.appendChild(metaItem);
          }
        }
        
        // Create loading state
        swiperSlides.innerHTML = `
          <div class="swiper-slide">
            <div class="modal-loading">
              <i class="fas fa-spinner fa-spin"></i>
              <span>Loading content...</span>
            </div>
          </div>
        `;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Load content with slight delay for better UX
        setTimeout(() => {
          // Populate Swiper slides with images and videos
          swiperSlides.innerHTML = [
            ...(project.images || []).map(img => 
              `<div class="swiper-slide">
                <img src="${img.src}" alt="${img.alt}" loading="lazy" 
                     onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'media-error\'><i class=\'fas fa-image\'></i><p>Failed to load image</p></div>'">
               </div>`
            ),
            ...(project.videos || []).map(video => 
              `<div class="swiper-slide">
                <video controls muted playsinline>
                  <source src="${video.src}" type="${video.type}">
                  <div class="media-error">
                    <i class="fas fa-video"></i>
                    <p>Video format not supported</p>
                  </div>
                </video>
               </div>`
            )
          ].join('');
          
          // Initialize Swiper
          initializeSwiper();
        }, 500);
      }
    });
  });

  // Close modal function
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    // Pause all videos when closing modal
    document.querySelectorAll('video').forEach(video => video.pause());
    
    // Reset modal content with delay
    setTimeout(() => {
      swiperSlides.innerHTML = '';
      projectDescription.textContent = '';
      projectMeta.innerHTML = '';
    }, 300);
  }

  // Close modal events
  closeBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Make closeModal function available globally
  window.closeModal = closeModal;
});