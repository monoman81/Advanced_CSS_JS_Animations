let card = document.querySelector('.card');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    console.log('Toggle clicked');
    card.classList.toggle('active');
})


