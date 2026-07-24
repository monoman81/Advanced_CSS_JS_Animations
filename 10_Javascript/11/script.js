let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
   toggle.classList.toggle('active');
});