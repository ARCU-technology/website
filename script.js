document.body.classList.remove('js-enabled');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded'); // Debugging line

  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
  });

  const sections = document.querySelectorAll('.section-container, .customer-section, .about-section, .contact-section');
  const options = {
    root: null,
    threshold: 0.6,
  };

  const scrollIndicator = document.querySelector('#scroll-indicator-container');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('section-container')) {
          const image = entry.target.querySelector('.section-image');
          const text = entry.target.querySelector('.normal-text');
          const title = entry.target.querySelector('.title-section');

          if (image.classList.contains('image-left')) {
            image.classList.add('slide-in-left');
            text.classList.add('slide-in-right');
            title.classList.add('slide-in-right');
          } else {
            image.classList.add('slide-in-right');
            text.classList.add('slide-in-left');
            title.classList.add('slide-in-left');
          }

          entry.target.style.opacity = 1;
          if (scrollIndicator) {
            scrollIndicator.classList.add('hide-scroll-indicator');
          }
          observer.unobserve(entry.target);
        } else if (entry.target.classList.contains('customer-section')) {
          const customerTitle = entry.target.querySelector('.customer-title');
          const customerImages = entry.target.querySelectorAll('.image-item');

          customerTitle.classList.add('slide-in-left');
          customerImages.forEach((image) => {
            image.classList.add('fade-in-and-scale');
          });

          entry.target.style.opacity = 1;
          if (scrollIndicator) {
            scrollIndicator.classList.add('hide-scroll-indicator');
          }
          observer.unobserve(entry.target);
        } else if (entry.target.classList.contains('contact-section')) {
          const contactImage = entry.target.querySelector('.contact-image');
          contactImage.classList.add('slide-in-up');
          entry.target.style.opacity = 1;
          if (scrollIndicator) {
            scrollIndicator.classList.add('hide-scroll-indicator');
          }
          observer.unobserve(entry.target);
        }
        else if (entry.target.classList.contains('about-section')){
          const about = entry.target.querySelector('.about-text');
          about.classList.add('slide-in-up');
          entry.target.style.opacity = 1;
          if (scrollIndicator) {
            scrollIndicator.classList.add('hide-scroll-indicator');
          }
          observer.unobserve(entry.target);
        }
      } 
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
