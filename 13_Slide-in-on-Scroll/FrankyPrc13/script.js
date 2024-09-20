function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  const sliderImages = document.querySelectorAll('.slide-in');
  
  const checkSlide = () => {
    sliderImages.forEach(sliderImage => {
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
  
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  };
  
  // Use IntersectionObserver for better performance
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the image is visible
  };
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);
  
  sliderImages.forEach(image => {
    imageObserver.observe(image);
  });
  
  // Fallback for browsers that don't support IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    window.addEventListener('scroll', debounce(checkSlide));
  }
  