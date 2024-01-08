document.addEventListener('DOMContentLoaded', function () {
    const rotateContainer = document.querySelector('.spinner');
  
    document.addEventListener('mousemove', function (e) {
      const centerY = window.innerHeight / 2;
  
      const verticalMovement = (e.clientY - centerY) / 80; // Adjust the divisor for sensitivity
  
      rotateContainer.style.transform = `rotate(${verticalMovement}deg)`;
    });
  });
  