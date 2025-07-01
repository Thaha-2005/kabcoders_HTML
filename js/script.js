
  const scrollContainer = document.getElementById('courseScroll');
  const scrollRight = document.getElementById('scrollRight');
  const scrollLeft = document.getElementById('scrollLeft');

  scrollRight.addEventListener('click', () => {
    scrollContainer.scrollLeft += 200; // scrolls to the right
  });

  scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 200; // scrolls to the left
  });







   const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

