document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    // Toggle visibilidade da resposta
    if (answer.classList.contains('hidden')) {
      answer.classList.remove('hidden');
      button.querySelector('.icon-faq').style.transform = 'rotate(180deg)';
    } else {
      answer.classList.add('hidden');
      button.querySelector('.icon-faq').style.transform = 'rotate(0deg)';
    }
  });
});