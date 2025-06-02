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
        const artistsGrid = document.getElementById('artists-grid');
        const galleryGrid = document.getElementById('gallery-grid');
        const videoModal = document.getElementById('video-modal');
        const artistModal = document.getElementById('artist-modal');
        const imageModal = document.getElementById('image-modal');
        const videoPlayer = document.getElementById('video-player');
        const videoTitle = document.getElementById('video-title');
       
        const artistImg = document.getElementById('artist-img');
        const artistName = document.getElementById('artist-name');
        const artistRole = document.getElementById('artist-role');
        const artistTagline = document.getElementById('artist-tagline');
        const artistBio = document.getElementById('artist-bio');
        const artistWorks = document.getElementById('artist-works');
        const artistSkills = document.getElementById('artist-skills');
        const modalImage = document.getElementById('modal-image');
        const imageTitle = document.getElementById('image-title');
        const imageDescription = document.getElementById('image-description');

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            // Render all sections
            renderVideos(festivals);
            renderArtists(dramaPeople);
            renderImages(images);
            
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

        // Render artist cards
        function renderArtists(artists) {
            artistsGrid.innerHTML = '';
            artists.forEach(artist => {
                const artistCard = document.createElement('div');
                artistCard.className = 'bg-white rounded-xl shadow-md p-6 text-center card-hover artist-card';
                artistCard.dataset.role = artist.primaryRole.toLowerCase();
                artistCard.dataset.name = artist.name.toLowerCase();
                
                artistCard.innerHTML = `
                    <div class="w-32 h-32 mx-auto mb-4">
                        <img src="${artist.profilePic}" alt="${artist.name}" class="w-full h-full object-cover rounded-full border-4 border-primary/20">
                    </div>
                    <h3 class="font-bold text-xl text-dark mb-1">${artist.name}</h3>
                    <p class="text-primary font-medium mb-3">${artist.primaryRole}</p>
                    <button class="view-profile bg-light hover:bg-gray-200 text-dark font-medium py-2 px-6 rounded-full transition duration-300 text-sm">
                        ପ୍ରୋଫାଇଲ୍ ଦର୍ଶନ କରନ୍ତୁ
                    </button>
                `;
                
                // Add click event to view profile
                artistCard.querySelector('.view-profile').addEventListener('click', () => {
                    openArtistModal(artist);
                });
                
                artistsGrid.appendChild(artistCard);
            });
        }

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

        // Open video modal
        function openVideoModal(video) {
            videoPlayer.src = video.videoUrl;
            videoTitle.textContent = video.title;
            
            videoModal.classList.remove('hidden');
            videoModal.classList.add('flex');
            document.body.classList.add('overflow-hidden');
        }

        // Open artist modal
        function openArtistModal(artist) {
            artistImg.src = artist.profilePic;
            artistName.textContent = artist.name;
            artistRole.textContent = artist.primaryRole;
            artistTagline.textContent = artist.tagline;
            artistBio.textContent = artist.bio;
            
            // Clear previous content
            artistWorks.innerHTML = '';
            artistSkills.innerHTML = '';
            
            // Populate notable works
            artist.notableWorks.forEach(work => {
                const li = document.createElement('li');
                li.textContent = work;
                artistWorks.appendChild(li);
            });
            
            // Populate skills
            artist.skills.forEach(skill => {
                const span = document.createElement('span');
                span.className = 'bg-purple-100 text-primary text-sm px-3 py-1 rounded-full';
                span.textContent = skill;
                artistSkills.appendChild(span);
            });
            
            artistModal.classList.remove('hidden');
            artistModal.classList.add('flex');
            document.body.classList.add('overflow-hidden');
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
            document.getElementById('close-video').addEventListener('click', closeModals);
            document.getElementById('close-artist').addEventListener('click', closeModals);
            document.getElementById('close-image').addEventListener('click', closeModals);
            
            // Close modals when clicking outside
            videoModal.addEventListener('click', (e) => {
                if (e.target === videoModal) closeModals();
            });
            
            artistModal.addEventListener('click', (e) => {
                if (e.target === artistModal) closeModals();
            });
            
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
            videoModal.classList.add('hidden');
            artistModal.classList.add('hidden');
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