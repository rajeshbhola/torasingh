 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#8B5FBF',
                        secondary: '#FF6B6B',
                        accent: '#4ECDC4',
                        dark: '#2D3047',
                        light: '#F7F9FC'
                    }
                }
            }
        }
 // DOM Elements
       
        const galleryGrid = document.getElementById('gallery-grid');
        const imageModal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        const imageTitle = document.getElementById('image-title');
        const imageDescription = document.getElementById('image-description');

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            // Render all sections
           
            renderImages(images);
            
            // Setup event listeners
            setupEventListeners();
        });

      

        // Render gallery images
        function renderImages(images) {
            galleryGrid.innerHTML = '';
            images.forEach(image => {
                const imageItem = document.createElement('div');
                imageItem.className = 'masonry-item relative group gallery-item';
                imageItem.dataset.theme = image.theme;
                
                imageItem.innerHTML = `
                    <img src="${image.url}" alt="${image.title}" class="w-full rounded-lg shadow-md cursor-pointer">
                    <div class="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="text-white text-center p-4">
                            <h3 class="font-bold text-lg">${image.title}</h3>
                        </div>
                    </div>
                `;
                
                // Add click event to open image
                imageItem.querySelector('img').addEventListener('click', () => {
                    openImageModal(image);
                });
                
                galleryGrid.appendChild(imageItem);
            });
        }


        // Open image modal
        function openImageModal(image) {
            modalImage.src = image.url;
            imageTitle.textContent = image.title;
            imageDescription.textContent = image.description;
            imageModal.classList.remove('hidden');
            imageModal.classList.add('flex');
            document.body.classList.add('overflow-hidden');
        }

        // Setup all event listeners
        function setupEventListeners() {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Close modals
           
            document.getElementById('close-image').addEventListener('click', closeModals);
            
            
            imageModal.addEventListener('click', (e) => {
                if (e.target === imageModal) closeModals();
            });
            
            // Navigation active state
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', function() {
                    document.querySelectorAll('.nav-item').forEach(i => {
                        i.classList.remove('nav-active');
                    });
                    this.classList.add('nav-active');
                    
                    // Close mobile menu after click
                    mobileMenu.classList.add('hidden');
                });
            });
            
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

       
        

        // Close all modals
        function closeModals() {
            imageModal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
            videoPlayer.src = '';
        }


        // Show/hide the button on scroll
  window.addEventListener("scroll", function () {
    const backToTop = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  });

  // Scroll to top when clicked
  document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });