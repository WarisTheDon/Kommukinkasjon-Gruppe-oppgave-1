window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxText = document.getElementById('parallax-text');
    parallaxText.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
});
