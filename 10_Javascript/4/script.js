let text = document.querySelector('.text')
let htmlSpans = text.innerText.split('').map((letter, index) => {
    return `<span style="animation-duration:${Math.random() * 5}s; filter:hue-rotate(${index*50}deg)">${letter}</span>`
}).join('');

text.innerHTML = htmlSpans;

