
// script.js - simple interaction
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});
