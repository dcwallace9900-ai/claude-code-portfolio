// Background page interactive features
document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile menu functionality (if not already handled by main script)
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
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

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.education-card, .certification-card, .timeline-item').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Add scroll-to-top functionality
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Create scroll-to-top button
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Add hover effects for certification cards
    document.querySelectorAll('.certification-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect for timeline items
    document.querySelectorAll('.timeline-content').forEach(content => {
        content.addEventListener('click', () => {
            content.style.transform = 'scale(1.05)';
            content.style.background = 'rgba(255, 255, 255, 0.2)';
            
            setTimeout(() => {
                content.style.transform = '';
                content.style.background = '';
            }, 200);
        });
    });

    // Progress indicator for scroll
    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #fbbf24, #f59e0b);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };

    createProgressBar();

    // Add typing effect to hero subtitle (optional enhancement)
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1000);
    }

    // Analytics tracking (if analytics is implemented)
    const trackPageView = () => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_title: 'Background',
                page_location: window.location.href
            });
        }
    };

    trackPageView();

    // Track certification card interactions
    document.querySelectorAll('.certification-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.certification-title').textContent;
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'certification_view', {
                    certification_name: title,
                    position: index + 1
                });
            }
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'Home':
                case 'h':
                    e.preventDefault();
                    window.location.href = 'index.html';
                    break;
                case 'b':
                    e.preventDefault();
                    window.location.href = 'blog.html';
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    scrollToTop();
                    break;
            }
        }
    });

    console.log('Background page loaded successfully!');
});