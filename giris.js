const kopyala = document.querySelectorAll('.fa-copy');
  kopyala.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const koplanacak = e.target.parentElement.previousElementSibling.querySelector('code').innerText;
      let input = document.createElement('textarea');
      input.type = 'text';
      input.value = koplanacak;
      const scrollY = window.scrollY;
      document.body.appendChild(input);
      input.focus();
      input.select();
      input.setSelectionRange(0, input.value.length);
      document.execCommand('copy');
      document.body.removeChild(input);
      window.scrollTo(0, scrollY);
    });
  });
