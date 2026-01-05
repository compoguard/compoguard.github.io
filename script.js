// script.js – Interactive behaviors for the landing page
document.addEventListener('DOMContentLoaded', () => {
    /* -----------------------------------------------------
       1. Language Toggle Logic
       ----------------------------------------------------- */
    const htmlEl = document.documentElement;
    const toggleBtn = document.getElementById('lang-toggle');
    const langText = toggleBtn.querySelector('.lang-text');

    // Determine initial language
    const savedLang = localStorage.getItem('lang');
    const defaultLang = savedLang || (navigator.language.startsWith('tr') ? 'tr' : 'en');
    setLanguage(defaultLang);

    toggleBtn.addEventListener('click', () => {
        const newLang = htmlEl.getAttribute('data-lang') === 'en' ? 'tr' : 'en';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        htmlEl.setAttribute('data-lang', lang);
        localStorage.setItem('lang', lang);

        // Update button text
        if (langText) {
            langText.textContent = lang === 'en' ? 'Türkçe' : 'English';
        }
    }

    /* -----------------------------------------------------
       2. Scroll Animations (Intersection Observer)
       ----------------------------------------------------- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    /* -----------------------------------------------------
       3. Card Glow Effect (Mouse Tracking)
       ----------------------------------------------------- */
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
