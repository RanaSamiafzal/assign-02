// Using CSS-only hover for dropdown

// Date input placeholder and picker functionality
document.addEventListener('DOMContentLoaded', function() {
  const dateInput = document.getElementById('date');
  if (dateInput) {
    // Set initial placeholder-like value
    dateInput.value = '';
    dateInput.placeholder = 'Select Date'; // Native placeholder, but won't show for date type

    // Simulate placeholder with JS
    const placeholderText = 'Select Date';
    dateInput.addEventListener('focus', function() {
      if (this.value === '') {
        this.setAttribute('data-placeholder', placeholderText);
      }
      // Trigger date picker
      this.showPicker();
    });

    dateInput.addEventListener('input', function() {
      if (this.value !== '') {
        this.removeAttribute('data-placeholder');
      }
    });

    // Style for placeholder simulation if needed
    dateInput.style.color = '#999';
    dateInput.addEventListener('focus', function() {
      this.style.color = '#000';
    });
    dateInput.addEventListener('blur', function() {
      if (this.value === '') {
        this.style.color = '#999';
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});



// // Toggle navbar for mobile view 

//   const menuToggle = document.getElementById('menu-toggle');
//   const navItems = document.getElementById('nav-items');

//   menuToggle.addEventListener('click', () => {
//     navItems.classList.toggle('active');
//   });




 
// EMAIL JS  INtegration


(function(){
  emailjs.init("1lVgkipqddt7Zv9nQ"); // Replace with your EmailJS public key
})();


document.getElementById("appointment-form").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload
  
  emailjs.sendForm("service_2r8l2ik", "template_eowk9z1", this)
      .then(function() {
          alert("✅ Appointment booked successfully! We’ll contact you soon.");
          this.reset(); // Clear all form fields after successful submission
      }, function(error) {
          console.log("FAILED...", error);
          alert("❌ Something went wrong. Please try again later.");
      });
});

