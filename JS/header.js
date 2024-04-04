let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    header.classList.add('header-hide');
  } else {
    header.classList.remove('header-hide');
  }

  lastScrollTop = scrollTop;
});
