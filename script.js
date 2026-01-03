// ──────────────────────────────────────
// SIDEBAR TOGGLE & NAVIGATION
// ──────────────────────────────────────

const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle sidebar on mobile
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
    });
}

// Close sidebar when close button is clicked
if (sidebarClose) {
    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
}

// Close sidebar when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
        
        // Smooth scroll is handled by browser default behavior
        // due to scroll-behavior: smooth in CSS
    });
});

// Set active link based on current section in view
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveLink);

// Close sidebar when clicking outside of it
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    updateActiveLink();
});
