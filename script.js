// JS for testimonial
document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll('.testimonial-col');
  
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    testimonials.forEach((card) => {
      observer1.observe(card);
    });
  });
  
  
  // JS for Our Commitment
  document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.imagess');
    if (!image) return;
  
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    observer2.observe(image);
  });
  
  
  // JS for Facilities
  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');
  
  if (next && prev) {
    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });
  
    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });
  }
  
  
  // JS for Toggle Menu
  const navLinks = document.getElementById("navLinks");
  
  function showMenu() {
      navLinks.classList.add("active");
      navLinks.style.right = "0";
  }
  
  function hideMenu() {
      navLinks.classList.remove("active");
      navLinks.style.right = "-200px";
  }