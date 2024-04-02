const options = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.5, // 50%가 viewport에 들어와 있어야 callback 실행
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, options);

const titleList = document.querySelectorAll('h2');
titleList.forEach((el) => observer.observe(el));
