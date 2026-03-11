document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Trigger point offset

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Initial check on load
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(6, 8, 15, 0.8)';
            navbar.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.03)';
            navbar.style.border = '1px solid rgba(255, 255, 255, 0.08)';
        }
    });

    // Form Submission (mock)
    const applyForm = document.querySelector('.apply-form');
    if (applyForm) {
        applyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = applyForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Application Sent!';
            btn.style.background = '#10b981'; // Success green
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                applyForm.reset();
            }, 3000);
        });
    }

    // Parallax effect on glowing orbs
    const orbs = document.querySelectorAll('.glow-orb');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const moveX = (window.innerWidth / 2 - e.clientX) * speed / 1000;
            const moveY = (window.innerHeight / 2 - e.clientY) * speed / 1000;
            orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});
