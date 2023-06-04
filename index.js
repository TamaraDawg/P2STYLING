var prevScrollPos = window.pageYOffset;
// is basically letting the home, genre and profile button always be on screen even when scrolled. (main.html)
window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById('nav');

  if (currentScrollPos > prevScrollPos) {
    navbar.classList.add('topnav-fixed');
  } else {
    navbar.classList.remove('topnav-fixed');
  }

  prevScrollPos = currentScrollPos;
});
