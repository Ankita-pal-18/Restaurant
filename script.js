// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight Active Menu Section on Scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li a');
    
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});

// Gallery Image Modal
document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `;
        document.body.appendChild(modal);

        // Close Modal
        modal.querySelector('.close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Close Modal on Outside Click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });
});

// Form Submission Alert
document.querySelector('.contact-section form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    this.reset();  // Reset the form
});