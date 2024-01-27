// function toggleMobileMenu() {
//     var nav = document.querySelector('nav');
//     nav.classList.toggle('show-mobile-menu');
//   }
// document.addEventListener('DOMContentLoaded', function() {
//     var mobileMenuIcon = document.querySelector('.mobile-menu-icon');
//     if (mobileMenuIcon) {
//       mobileMenuIcon.addEventListener('click', toggleMobileMenu);
//     }
//   });
  
//   function toggleMobileMenu() {
//     var nav = document.querySelector('nav');
//     nav.classList.toggle('show-mobile-menu');
//   }
  

document.addEventListener('DOMContentLoaded', function() {
    var mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    
    if (mobileMenuIcon) {
      mobileMenuIcon.addEventListener('click', function() {
        toggleMobileMenu();
      });
    }
  });
  
  function toggleMobileMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show-mobile-menu');
  }
  