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






let bannerFarger = 'linear-gradient(90deg, #002244, #003366, #0055AA, #0066CC)';


document.getElementById("header1").style.backgroundImage = bannerFarger; 
document.getElementById("footerUno").style.backgroundImage = bannerFarger; 
document.getElementById("headettekst").style.backgroundImage = bannerFarger;





document.getElementById("header1").addEventListener('click', function() {
    let bannerFarger = 'linear-gradient(90deg, #6699CC, #99BBEE, #AACCEE, #CCEEFF)';

    document.getElementById("header1").style.backgroundImage = bannerFarger; 
    document.getElementById("footerUno").style.backgroundImage = bannerFarger; 
    document.getElementById("headettekst").style.backgroundImage = bannerFarger;
});










