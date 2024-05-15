document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  let currentIndex = 0;
  
  function showNextItem() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  setInterval(showNextItem, 3000); // Change slide every 3 seconds
});
