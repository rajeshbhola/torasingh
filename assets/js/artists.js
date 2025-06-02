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
       
        const artistsGrid = document.getElementById('artists-grid');
        const artistModal = document.getElementById('artist-modal');
        const artistImg = document.getElementById('artist-img');
        const artistName = document.getElementById('artist-name');
        const artistRole = document.getElementById('artist-role');
        const artistTagline = document.getElementById('artist-tagline');
        const artistBio = document.getElementById('artist-bio');
        const artistWorks = document.getElementById('artist-works');
        const artistSkills = document.getElementById('artist-skills');
        

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            // Render all sections
            
            renderArtists(dramaPeople);
           
            
            // Setup event listeners
            setupEventListeners();
        });

       

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

       

        // Setup all event listeners
        function setupEventListeners() {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Close modals
           
            document.getElementById('close-artist').addEventListener('click', closeModals);
          
            
            // Close modals when clicking outside
           
            artistModal.addEventListener('click', (e) => {
                if (e.target === artistModal) closeModals();
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
            
            artistModal.classList.add('hidden');
            
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