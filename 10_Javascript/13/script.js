let video = document.querySelector('video');
let thumbs = document.querySelectorAll('ul li');

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', e => {
        e.preventDefault();
        video.src = `video${index+1}.mp4`;
    })
});
