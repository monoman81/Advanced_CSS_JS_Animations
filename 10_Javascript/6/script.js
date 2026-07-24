let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(section => {
        let scrollDistance = window.scrollY;
        let sectionDistance = section.offsetTop;

        if (scrollDistance + 150 >= sectionDistance) {
            section.classList.add('show-animate');
        }
        else {
            section.classList.remove('show-animate');
        }
    })
}


