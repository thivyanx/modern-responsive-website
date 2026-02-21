// JS for testimonial



    document.addEventListener("DOMContentLoaded", function() {
      const testimonials = document.querySelectorAll('.testimonial-col');
    
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('show');
              }, index * 150); // stagger
            }
          });
        },
        {
          threshold: 0.2
        }
      );
    
      testimonials.forEach((card) => {
        observer.observe(card);
      });
    });
    
  

// JS for Our-Commitment

    document.addEventListener('DOMContentLoaded', () => {
      const image = document.querySelector('.imagess');
      if (!image) return; // safety check
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
    
      observer.observe(image);
    });
    
    
  



    

// JS for Facilities ani


    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')
    
    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])
    })
    
    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
    })
    



// JS for scroll ani


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.3
    });

    document.querySelectorAll('.content, .images').forEach(el => {
        observer.observe(el);
    });

    
     observer.observe(document.querySelector('.back-col'));

    document.querySelectorAll('.service-col').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.15}s`;
        observer.observe(card);
    });

    const readMoreBtn = document.querySelector('.read-more-btnn');
    observer.observe(readMoreBtn);








// Play btn


    const playBtn = document.querySelector(".play-btn");
    const popup = document.getElementById("videoPopup");
    const iframe = document.getElementById("youtubeVideo");

    playBtn.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
    });

    function closeVideo() {
        popup.style.display = "none";
        iframe.src = iframe.src; 
    }



        
// JS for image


    const image = document.getElementById("parallaxImage");
  
    if (image) {
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const movement = scrollY * 0.2;
        image.style.transform = `translateY(${-movement}px)`;
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
