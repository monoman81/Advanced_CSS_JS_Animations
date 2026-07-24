let side1 = document.querySelector('.side-1');
let side2 = document.querySelector('.side-2');

window.addEventListener('scroll', () => {
    side1.style.left = -window.scrollY + 'px';
    side2.style.left = window.scrollY + 'px';
})


