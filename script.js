const slideshow = document.querySelector('.slideshow');

setInterval(() => {

    const firstIcon = slideshow.firstElementChild;

    firstIcon.classList.add('fade-out');

    const thirdIcon = slideshow.children[3];

    thirdIcon.classList.add('light');

    thirdIcon.previousElementSibling.classList.remove('ligt');

    setTimeout(() => {
        slideshow.removeChild(firstIcon);
        slideshow.appendChild(firstIcon);   
        setTimeout(() => {
            firstIcon.classList.remove('fade-out');
        }, 500);

    }, 500);

}, 3000);