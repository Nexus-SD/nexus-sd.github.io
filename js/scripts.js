document.addEventListener('DOMContentLoaded', () => {
    const heroLogo = document.querySelector('.hero-logo');

    heroLogo.addEventListener('mousemove', e => {
        const rect = heroLogo.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        heroLogo.style.setProperty('--x', `${x / 10}deg`); 
        heroLogo.style.setProperty('--y', `${-y / 10}deg`);
    });

    heroLogo.addEventListener('mouseleave', () => {
        heroLogo.style.setProperty('--x', '0deg');
        heroLogo.style.setProperty('--y', '0deg');
    });
});
