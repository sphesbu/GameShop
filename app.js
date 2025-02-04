    // Optional JavaScript for Enhanced Interactivity
    document.addEventListener('DOMContentLoaded', function() {
        const dropdowns = document.querySelectorAll('.nav-item.dropdown, .dropdown-submenu');
  
        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'block';
          });
  
          dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'none';
          });
        });
      });