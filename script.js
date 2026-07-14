const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

const fixedSearchIcon = document.querySelector('.fixed-search-icon');

if (fixedSearchIcon) {
  fixedSearchIcon.addEventListener('click', function (e) {
    e.preventDefault();
    const searchSection = document.getElementById('search');
    const searchInput = document.getElementById('searchBox');

    if (searchSection) {
      const y = searchSection.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    if (searchInput) {
      setTimeout(() => {
        searchInput.focus();
        searchInput.select();
      }, 500);
    }
  });
}
