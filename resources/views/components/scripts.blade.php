  <!-- Global Interactive Scripts -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId && targetId !== '#') {
            const targetElem = document.querySelector(targetId);
            if (targetElem) {
              e.preventDefault();
              targetElem.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });
    });
  </script>

  @stack('scripts')
