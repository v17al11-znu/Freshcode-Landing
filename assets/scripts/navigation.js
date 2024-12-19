// Запускаємо оновлення кожні 5 секунд
setInterval(updateCounter, 2000);

  document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('header ul li a');

      for (const link of links) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Запобігаємо стандартному переходу

        const targetId = this.getAttribute('href').substring(0);
        const targetSection = document.getElementById(targetId);
          console.log(targetId);

        if (targetSection) {
          // Плавна прокрутка до секції
          window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Враховуємо висоту шапки
            behavior: 'smooth'
          });
        }
      });
    }
  });