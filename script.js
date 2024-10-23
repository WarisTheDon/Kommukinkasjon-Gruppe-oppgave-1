window.addEventListener('scroll', function() {
    var parallaxText = document.getElementById('parallax-text');
    var scrollPosition = window.scrollY;

    // Parallax effect: Move the text slower than scroll
    parallaxText.style.transform = 'translateY(' + (scrollPosition * 0.6) + 'px)';

    // Change text color when scrolling past 100px
    if (scrollPosition >= 300) {
        parallaxText.style.color = 'white';  // Change text color to white
    } else {
        parallaxText.style.color = '#003366';  // Revert to original color
    }
});





var bannerFarger = "#003366"; 


document.getElementById("header1").style.backgroundColor = bannerFarger; 
document.getElementById("footerUno").style.backgroundColor = bannerFarger; 
document.getElementById("headettekst").style.backgroundColor = bannerFarger; 


