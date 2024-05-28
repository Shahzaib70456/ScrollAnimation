document.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        let offset = window.pageYOffset;
        section.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});
