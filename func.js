function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// Get all sections
// const sections = document.querySelectorAll('section');

// // Function to scroll to the next section
// function scrollToNextSection() {
//   const currentSection = getCurrentSection();
//   let nextSection = null;

//   // Find the next section
//   for (let i = 0; i < sections.length; i++) {
//     if (sections[i] === currentSection) {
//       if (i === sections.length - 1) {
//         // If it's the last section, scroll to the top
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         return;
//       } else {
//         nextSection = sections[i + 1];
//         break;
//       }
//     }
//   }

//   // Scroll to the next section
//   if (nextSection) {
//     nextSection.scrollIntoView({ behavior: 'smooth' });
//   }
// }

// // Function to get the current section
// function getCurrentSection() {
//   let currentSection = null;
//   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;

//     if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//       currentSection = section;
//     }
//   });

//   return currentSection;
// }



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
