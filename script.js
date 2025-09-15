document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const typeElements = entry.target.querySelectorAll('.type-text');
                typeElements.forEach(el => {
                    typeWriter(el);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    function typeWriter(element) {
        const textToType = element.dataset.text;
        let charIndex = 0;
        element.innerHTML = '';

        const typingInterval = setInterval(() => {
            if (charIndex < textToType.length) {
                element.innerHTML += textToType.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                element.classList.add('typed');
            }
        }, 100);
    }
});