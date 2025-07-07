    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        const content = card.querySelector('.accordion-content');
        if (!content) return;

        if (content.classList.contains('open')) {
          content.classList.remove('open');
        } else {
          document.querySelectorAll('.accordion-content.open').forEach(openContent => {
            openContent.classList.remove('open');
          });
          content.classList.add('open');
        }
      });
    });