// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
html.classList.toggle('dark', savedTheme === 'dark');

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Header Scroll Effect
const header = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
    
    lastScrollY = currentScrollY;
});

// Intersection Observer for Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section > div').forEach(el => {
    observer.observe(el);
});

// Active Navigation Link Highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-blue-600', 'dark:text-blue-400');
                link.classList.add('text-gray-700', 'dark:text-gray-300');
                
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.remove('text-gray-700', 'dark:text-gray-300');
                    link.classList.add('text-blue-600', 'dark:text-blue-400');
                }
            });
        }
    });
});

// Download CV Function
function downloadCV() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,CV de Carlos Alberto Granados Ybarra - Por favor, agregue su CV aquí';
    link.download = 'Carlos_Granados_CV.txt';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show notification
    showNotification('CV descargado exitosamente');
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation-triangle'} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Contact Form Simulation (since this is a static site)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Mensaje enviado exitosamente (simulado)');
            contactForm.reset();
        });
    }
});

// Typing Animation for Hero Section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('#inicio h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'fixed bottom-8 right-8 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 opacity-0 pointer-events-none';
backToTopButton.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        backToTopButton.classList.add('opacity-0', 'pointer-events-none');
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#inicio');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500';
    loader.innerHTML = `
        <div class="text-center">
            <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600 dark:text-gray-300">Cargando...</p>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.classList.add('opacity-0');
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 500);
    }, 1000);
});

// Add smooth reveal animations to elements
const revealElements = document.querySelectorAll('.animate-slide-up');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
    revealObserver.observe(el);
});

// Console welcome message
console.log(`
🚀 ¡Hola! Soy Carlos Alberto Granados Ybarra
💼 Ingeniero Electrónico especializado en IA y Cloud
📧 carlos.granados@pucp.edu.pe
🌐 Esta página fue creada con HTML, TailwindCSS y JavaScript vanilla
⭐ ¡Gracias por visitar mi portafolio!
`);
