// Gallery data with different aspect ratios for masonry effect
const galleryData = [
    { id: 1, src: '/images/wedding/wedding 1.jpg', category: 'wedding', title: 'Wedding Ceremony', alt: 'Beautiful wedding ceremony' },
    { id: 2, src: '/images/babyshower birthday/baby 2.jpg', category: 'babyshower', title: 'babyshower', alt: 'baby shower photography' },
    { id: 3, src: '/images/bridal/bride 1.jpg', category: 'bridal', title: 'Wedding Event', alt: 'wedding event photography' },
    { id: 4, src: '/images/babyshower birthday/baby 1.jpg', category: 'babyshower', title: 'baby Photography', alt: 'baby photo shoot' },
    { id: 5, src: '/images/bridal/bride 7.jpg', category: 'bridal', title: 'Bridal Photography', alt: 'Bridal photography' },
    { id: 6, src: '/images/bridal/bride 6.jpg', category: 'bridal', title: 'Bridal Photography', alt: 'Bridal Photography' },
    { id: 7, src: '/images/bridal/bride 5.jpg', category: 'bridal', title: 'Bridal Portrait', alt: 'Beautiful bridal portrait' },
    { id: 8, src: '/images/bridal/bride 4.jpg', category: 'bridal', title: 'Bridal Portrait', alt: 'Bridal portrait session', },
    { id: 9, src: '/images/bridal/bride 2.jpg', category: 'bridal', title: 'Birthday Party', alt: 'Birthday celebration' },
    { id: 10, src: '/images/bridal/bride 3.jpg', category: 'bridal', title: 'Brand Photography', alt: 'Brand photography session' },
    { id: 11, src: '/images/wedding/wedding 2.jpg', category: 'wedding', title: 'Creative wedding shot', alt: 'Creative wedding photography' },
    { id: 12, src: '/images/outdoor/outdoor 1.jpg', category: 'outdoor', title: 'Fashion Shoot', alt: 'Fashion photography in studio' },
    { id: 13, src: '/images/bridal/bride 8.webp', category: 'bridal', title: 'bridal photograph', alt: 'professional bridal photographs' },
    { id: 14, src: '/images/bridal/bride 9.jpg', category: 'bridal', title: 'bridal Portrait', alt: 'bridal portrait session' },
    { id: 15, src: '/images/bridal/bride 10.avif', category: 'bridal', title: 'bridal', alt: 'Professional bridal portrait' },
    { id: 16, src: '/images/bridal/bride 11.jpeg', category: 'bridal', title: 'beautiful bride', alt: 'bridal photography' },
    { id: 17, src: '/images/bridal/bride 12.jpg', category: 'bridal', title: 'bridal Details', alt: 'bridal detail shots' },
    { id: 18, src: '/images/bridal/bride 13.webp', category: 'bridal', title: 'bridal Session', alt: 'bridal portrait session' },
    { id: 19, src: '/images/groom/groom 1.avif', category: 'groom', title: 'groom photograph', alt: 'wedding groom photography' },
    { id: 20, src: '/images/groom/groom 2.jpg', category: 'groom', title: 'groom Shoot', alt: 'groom shoot photography' },
    { id: 21, src: '/images/groom/groom 3.jpg', category: 'groom', title: 'Creative groom shot', alt: 'Creative groom photography' },
    { id: 22, src: '/images/groom/groom 4.jpg', category: 'groom', title: 'groom Shoot', alt: 'groom photography in outdoor' },
    { id: 23, src: '/images/groom/groom 5.jpg', category: 'groom', title: 'groom photograph', alt: 'professional groom photographs' },
    { id: 24, src: '/images/groom/groom 6.jpeg', category: 'groom', title: 'groom Portrait', alt: 'groom portrait session' },
    { id: 25, src: '/images/groom/groom 7.jpg', category: 'groom', title: 'groom', alt: 'Professional groom portrait' },
    { id: 26, src: '/images/wedding/wedding 3.jpg', category: 'wedding', title: 'beautiful wedding', alt: 'wedding photography' },
    { id: 27, src: '/images/wedding/wedding 4.jpg', category: 'wedding', title: 'wedding Details', alt: 'wedding detail shots' },
    { id: 28, src: '/images/wedding/wedding 5.jpg', category: 'wedding', title: 'wedding Session', alt: 'wedding portrait session' },
    { id: 29, src: '/images/wedding/wedding 6.avif', category: 'wedding', title: 'wedding photograph', alt: 'wedding photography' },
    { id: 30, src: '/images/wedding/wedding 7.jpg', category: 'wedding', title: 'wedding Shoot', alt: 'wedding shoot photography' },
    { id: 31, src: '/images/wedding/wedding 8.jpg', category: 'wedding', title: 'Wedding Ceremony', alt: 'Beautiful wedding ceremony' },
    { id: 32, src: '/images/wedding/wedding 9.webp', category: 'wedding', title: 'wedding', alt: 'wedding photography' },
    { id: 33, src: '/images/wedding/wedding 10.jpg', category: 'wedding', title: 'Wedding Event', alt: 'wedding event photography' },
    // { id: 34, src: '/images/babyshower birthday/baby 1.jpg', category: 'babyshower', title: 'baby Photography', alt: 'baby photo shoot' },
    // { id: 35, src: '/images/bridal/bride 7.jpg', category: 'bridal', title: 'Bridal Photography', alt: 'Bridal photography' },
    // { id: 36, src: '/images/bridal/bride 6.jpg', category: 'bridal', title: 'Bridal Photography', alt: 'Bridal Photography' },
    // { id: 37, src: '/images/bridal/bride 5.jpg', category: 'bridal', title: 'Bridal Portrait', alt: 'Beautiful bridal portrait' },
    // { id: 38, src: '/images/bridal/bride 4.jpg', category: 'bridal', title: 'Bridal Portrait', alt: 'Bridal portrait session', },
    // { id: 39, src: '/images/bridal/bride 2.jpg', category: 'bridal', title: 'Birthday Party', alt: 'Birthday celebration' },
    // { id: 40, src: '/images/bridal/bride 3.jpg', category: 'bridal', title: 'Brand Photography', alt: 'Brand photography session' },
];

// DOM elements
const galleryGrid = document.getElementById('galleryGrid');
const categoryButtons = document.querySelectorAll('.category-btn');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const closeModal = document.getElementById('closeModal');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

// Initialize gallery
function initGallery() {
    renderGallery('all');
    setupEventListeners();
}

// Render gallery items with masonry layout
function renderGallery(category) {
    const filteredData = category === 'all' ? galleryData : galleryData.filter(item => item.category === category);
    
    // Clear gallery with fade out effect
    const existingItems = galleryGrid.querySelectorAll('.gallery-item');
    existingItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        }, index * 50);
    });
    
    // Clear and render new items after animation
    setTimeout(() => {
        galleryGrid.innerHTML = '';
        
        filteredData.forEach((item, index) => {
            const galleryItem = createGalleryItem(item);
            galleryGrid.appendChild(galleryItem);
            
            // Add staggered animation
            setTimeout(() => {
                galleryItem.style.opacity = '1';
                galleryItem.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        // Trigger masonry layout recalculation
        setTimeout(recalculateMasonry, 500);
    }, 300);
}

// Create gallery item element
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    if (item.size === 'full') div.classList.add('full-width');
    div.style.opacity = '0';
    div.style.transform = 'translateY(30px)';
    div.style.transition = 'all 0.6s ease';
    
    div.innerHTML = `
        <img src="${item.src}" alt="${item.alt}" loading="lazy" onload="this.parentElement.classList.add('loaded')">
        <div class="gallery-overlay">
            <div class="overlay-icon">
                <i class="fas fa-search-plus"></i>
            </div>
            <div class="overlay-text">
                <h3>${item.title}</h3>
                <p>${getCategoryDisplayName(item.category)}</p>
            </div>
        </div>
    `;
    
    div.addEventListener('click', () => openModal(item));
    return div;
}

// Get category display name
function getCategoryDisplayName(category) {
    const categoryNames = {
        'bridal': 'Bridal Photography',
        'groom': 'Groom Photography',
        'wedding': 'Wedding Photography',
        'portrait': 'Portrait Sessions',
        'babyshower': 'BabyShower And Birthday',
        'outdoor': 'Outdoor'
    };
    return categoryNames[category] || category;
}

// Recalculate masonry layout (for browsers that need it)
function recalculateMasonry() {
    const items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach(item => {
        const img = item.querySelector('img');
        if (img.complete) {
            item.style.breakInside = 'avoid';
            item.style.pageBreakInside = 'avoid';
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter gallery
            renderGallery(category);
        });
    });
    
    // Modal close events
    closeModal.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModalHandler();
        }
    });
    
    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Window resize handler for masonry
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            recalculateMasonry();
        }, 250);
    });
}

// Open modal
function openModal(item) {
    modalImage.src = item.src;
    modalImage.alt = item.alt;
    modalTitle.textContent = item.title;
    modalCategory.textContent = getCategoryDisplayName(item.category);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add modal animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Close modal
function closeModalHandler() {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Lazy loading intersection observer
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    setupLazyLoading();
});

// Handle window resize for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Preload images for better performance
function preloadImages() {
    galleryData.forEach(item => {
        const img = new Image();
        img.src = item.src;
    });
}

// Start preloading after initial load
setTimeout(preloadImages, 1000);