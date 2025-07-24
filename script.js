// Nemish-Style Portfolio JavaScript - 2025
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSmoothScrolling();
    initBackToTop();
    initScrollAnimations();
    initMobileMenu();
    initToolHovers();
    initProjectAnimations();
    initHeroAnimations();
    initFloatingPillInteractions();
    initContactButtons();
});

// Enhanced Navigation for Dark Theme
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Enhanced navbar scroll effect for dark theme
    let lastScrollY = 0;
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 35, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid var(--border-color)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid var(--border-color)';
        }
        
        lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', throttle(handleScroll, 10));
    
    // Active navigation state with glow effect
    updateActiveNavLink();
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
}

// Update active navigation link with glow effect
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Enhanced Mobile Menu for Dark Theme
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.contains('active');
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (!isActive) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });
        
        // Close menu with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
                body.style.overflow = '';
        }
    });
    }
}

// Smooth Scrolling with proper offset
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced Back to Top with Glow Effect
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        };
        
        window.addEventListener('scroll', throttle(handleScroll, 100));
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Modern Scroll Animations with Staggered Effects
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(`
        .experience-card, 
        .education-card,
        .skill-category, 
        .project-card, 
        .tool-icon,
        .case-study-hero,
        .about-statement
    `);
    
    animateElements.forEach((el, index) => {
        // Initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        fadeObserver.observe(el);
    });
}

// Hero Section Animations
function initHeroAnimations() {
    const heroEmoji = document.querySelector('.hero-emoji');
    const heroPills = document.querySelectorAll('.hero-subtitle .pill');
    const heroTitle = document.querySelector('.hero-title');
    
    // Animate hero elements on load
    if (heroTitle) {
        heroTitle.style.animation = 'fadeInUp 0.8s ease 0.2s both';
    }
    
    if (heroEmoji) {
        heroEmoji.style.animation = 'bounce 2s infinite';
    }
    
    // Stagger pill animations
    heroPills.forEach((pill, index) => {
        pill.style.animation = `fadeInUp 0.6s ease ${0.4 + index * 0.1}s both`;
    });
}

// Tool Icons Hover Effects
function initToolHovers() {
    const toolIcons = document.querySelectorAll('.tool-icon');
    
    toolIcons.forEach(tool => {
        tool.addEventListener('mouseenter', () => {
            tool.style.transform = 'translateY(-4px) scale(1.1)';
            tool.style.boxShadow = 'var(--shadow-card)';
        });
        
        tool.addEventListener('mouseleave', () => {
            tool.style.transform = '';
            tool.style.boxShadow = '';
        });
    });
}

// Enhanced Project Card Animations
function initProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image img');
        const number = card.querySelector('.project-number');
        
        card.addEventListener('mouseenter', () => {
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
            if (number) {
                number.style.color = 'rgba(57, 255, 20, 0.3)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (image) {
                image.style.transform = 'scale(1)';
            }
            if (number) {
                number.style.color = 'rgba(255, 255, 255, 0.1)';
            }
        });
    });
}

// Contact Buttons with Enhanced Effects
function initContactButtons() {
    const contactButtons = document.querySelectorAll('.contact-buttons .btn');
    
    contactButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            if (btn.classList.contains('btn-primary')) {
                btn.style.boxShadow = 'var(--shadow-glow)';
            }
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = '';
        });
    });
}

// Pill Hover Effects
function initPillEffects() {
    const pills = document.querySelectorAll('.pill');
    
    pills.forEach(pill => {
        pill.addEventListener('mouseenter', () => {
            pill.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        pill.addEventListener('mouseleave', () => {
            pill.style.transform = '';
        });
    });
}

// Initialize pill effects
document.addEventListener('DOMContentLoaded', () => {
    initPillEffects();
});

// Enhanced Scroll Effects for Dark Theme
function initEnhancedScrollEffects() {
    // Add parallax effect to hero elements
    const heroYear = document.querySelector('.hero-year');
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroYear && heroTitle) {
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            heroYear.style.transform = `translateY(${rate}px)`;
            heroTitle.style.transform = `translateY(${rate * 0.5}px)`;
        }, 16));
    }
}

// Initialize enhanced scroll effects
initEnhancedScrollEffects();

// Utility Functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced Notification System for Dark Theme
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Dark theme styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove
    const autoRemoveTimer = setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemoveTimer);
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    notification.style.opacity = '0';
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: 'var(--accent-green)',
        error: '#ef4444',
        warning: 'var(--accent-orange)',
        info: 'var(--accent-blue)'
    };
    return colors[type] || colors.info;
}

// Performance Optimizations for Dark Theme
function preloadCriticalAssets() {
    const criticalImages = [
        'https://miro.medium.com/v2/resize:fill:128:128/0*s4NcjH4fyD66fod3',
        'https://miro.medium.com/v2/resize:fit:1400/1*pdFvSm4M1SL2ew6aBICJOg.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize critical preloading
preloadCriticalAssets();

// Accessibility Enhancements for Dark Theme
function initAccessibility() {
    // Focus management for mobile menu
    const mobileMenuToggle = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Enhanced focus indicators for dark theme
    const focusableElements = document.querySelectorAll('a, button, [tabindex]');
    focusableElements.forEach(el => {
        el.addEventListener('focus', () => {
            el.style.outline = '2px solid var(--accent-green)';
            el.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', () => {
            el.style.outline = '';
            el.style.outlineOffset = '';
        });
    });
}

// Initialize accessibility features
initAccessibility();

// Rotating Words Animation
function initRotatingWords() {
    const words = document.querySelectorAll('.rotating-words .word');
    if (words.length === 0) return;
    
    let currentIndex = 0;
    
    // Initialize first word as active
    words.forEach((word, index) => {
        if (index === 0) {
            word.classList.add('active');
        } else {
            word.classList.remove('active');
        }
    });
    
    // Rotate words every 2 seconds
    setInterval(() => {
        words[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % words.length;
        words[currentIndex].classList.add('active');
    }, 2000);
}

// Rotating Adjectives Animation for New Hero
function initRotatingAdjectives() {
    const adjectives = document.querySelectorAll('.rotating-adjectives .adjective');
    if (adjectives.length === 0) return;
    
    let currentIndex = 0;
    
    // Initialize first adjective as active
    adjectives.forEach((adjective, index) => {
        if (index === 0) {
            adjective.classList.add('active');
                    } else {
            adjective.classList.remove('active');
        }
    });
    
    // Rotate adjectives every 3 seconds
    setInterval(() => {
        adjectives[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % adjectives.length;
        adjectives[currentIndex].classList.add('active');
    }, 3000);
}

// Cursor Follower for Hero Section
function initCursorFollower() {
    const cursorFollower = document.querySelector('.cursor-follower');
    const hero = document.querySelector('.hero');
    
    if (!cursorFollower || !hero) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    hero.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    hero.addEventListener('mouseenter', () => {
        cursorFollower.style.opacity = '0.8';
    });
    
    hero.addEventListener('mouseleave', () => {
        cursorFollower.style.opacity = '0';
    });
    
    // Smooth cursor following animation
    function updateCursorFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.transform = `translate(${followerX - 10}px, ${followerY - 10}px)`;
        requestAnimationFrame(updateCursorFollower);
    }
    
    updateCursorFollower();
}

// Simple Floating Pills Interactions
function initFloatingPillInteractions() {
    const floatingPills = document.querySelectorAll('.floating-pill');
    
    floatingPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Show simple notification
            const text = pill.textContent.trim();
            showNotification(`${text} - That's what I do! 💼`, 'success');
        });
    });
}

// Letter Hover Effects for Portfolio Text
function initLetterHoverEffects() {
    const letters = document.querySelectorAll('.portfolio-text .letter');
    
    letters.forEach((letter, index) => {
        letter.addEventListener('mouseenter', () => {
            // Add glow effect to adjacent letters
            if (letters[index - 1]) {
                letters[index - 1].style.textShadow = '0 0 10px var(--accent-blue)';
            }
            if (letters[index + 1]) {
                letters[index + 1].style.textShadow = '0 0 10px var(--accent-blue)';
            }
        });
        
        letter.addEventListener('mouseleave', () => {
            // Remove glow effect from adjacent letters
            if (letters[index - 1]) {
                letters[index - 1].style.textShadow = '';
            }
            if (letters[index + 1]) {
                letters[index + 1].style.textShadow = '';
            }
        });
        
        letter.addEventListener('click', () => {
            // Create explosion effect
            for (let i = 0; i < 6; i++) {
                const particle = document.createElement('div');
                particle.innerHTML = '✦';
                particle.style.position = 'absolute';
                particle.style.color = `var(--accent-${['green', 'pink', 'purple', 'blue', 'orange', 'yellow'][i]})`;
                particle.style.fontSize = '1rem';
                particle.style.pointerEvents = 'none';
                particle.style.animation = `letterExplosion 1s ease-out forwards`;
                particle.style.animationDelay = `${i * 0.1}s`;
                
                const rect = letter.getBoundingClientRect();
                particle.style.left = `${rect.left + rect.width / 2}px`;
                particle.style.top = `${rect.top + rect.height / 2}px`;
                
                document.body.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 1000);
            }
            });
    });
}

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        showNotification('🎉 Easter egg activated! You found the secret! 🐱', 'success');
        
        // Add rainbow effect to page
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        
        konamiCode = [];
    }
});

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Export for external use
window.PortfolioApp = {
    showNotification,
    initScrollAnimations,
    updateActiveNavLink,
    initProjectAnimations
}; 