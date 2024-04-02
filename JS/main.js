const goupBtn = document.querySelector('.goupbtn');
const titleList = document.querySelectorAll('h2');
const topBtn = document.querySelector('.top-btn');

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
titleList.forEach((el) => observer.observe(el));

/* 버튼 이벤트 */
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
