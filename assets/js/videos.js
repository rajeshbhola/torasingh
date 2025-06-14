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
        const videoGrid = document.getElementById('video-grid');
        const videoModal = document.getElementById('video-modal');
        const videoPlayer = document.getElementById('video-player');
        const videoTitle = document.getElementById('video-title');
       
    

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            // Render all sections
            renderVideos(festivals);
            
            
            // Setup event listeners
            setupEventListeners();
        });

        // Render video cards
        function renderVideos(videos) {
            videoGrid.innerHTML = '';
            videos.forEach(video => {
                const videoCard = document.createElement('div');
                videoCard.className = 'bg-white rounded-xl shadow-md overflow-hidden card-hover video-card';
                videoCard.dataset.tags = video.tags.join(' ');
                
                videoCard.innerHTML = `
                    <div class="relative video-thumbnail cursor-pointer">
                        <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                                <i class="fas fa-play text-white text-2xl"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <h3 class="font-bold text-lg text-dark mb-2">${video.title}</h3>
                        
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-purple-100 text-primary text-xs px-2 py-1 rounded">#${video.festivalName}</span>
                            <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">#${video.year}</span>
                            <span class="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded">#${video.performanceType}</span>
                        </div>
                    </div>
                `;
                
                // Add click event to play video
                videoCard.querySelector('.video-thumbnail').addEventListener('click', () => {
                    openVideoModal(video);
                });
                
                videoGrid.appendChild(videoCard);
            });
        }


        // Open video modal
        function openVideoModal(video) {
            videoPlayer.src = video.videoUrl;
            videoTitle.textContent = video.title;
            
            videoModal.classList.remove('hidden');
            videoModal.classList.add('flex');
            document.body.classList.add('overflow-hidden');

           const correctPassword = "torasingh2025"; // Change this to your desired password
            const userPassword = prompt("Enter password to play this video:");

            if (userPassword === correctPassword) {
                videoPlayer.src = video.videoUrl;
                videoTitle.textContent = video.title;
                videoModal.classList.remove('hidden');
                videoModal.classList.add('flex');
                document.body.classList.add('overflow-hidden');
            } else if (userPassword !== null) {
                alert("Incorrect password. Access denied.");
                videoPlayer.src = '';
                videoModal.classList.add('hidden');
                videoModal.classList.remove('flex');
                document.body.classList.remove('overflow-hidden');
            } else {
                // User pressed Cancel
                videoPlayer.src = '';
                videoModal.classList.add('hidden');
                videoModal.classList.remove('flex');
                document.body.classList.remove('overflow-hidden');
            }
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
            document.getElementById('close-video').addEventListener('click', closeModals);
           
            
            // Close modals when clicking outside
            videoModal.addEventListener('click', (e) => {
                if (e.target === videoModal) closeModals();
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
            videoModal.classList.add('hidden');
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