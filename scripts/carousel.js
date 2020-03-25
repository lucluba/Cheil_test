var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideTimer = setInterval(nextSlide, 4000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%3;
    slides[currentSlide].className = 'slide showing';
}