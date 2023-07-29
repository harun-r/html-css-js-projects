const elements = document.querySelectorAll('.slideshow-element');

let elCount = 1;
setInterval(() => {
    elCount++;
    let selectElement = document.querySelector('.current');
    selectElement.classList.remove('current');

    if (elCount > elements.length) {
        elements[0].classList.add('current');
        elCount = 1;
    } else {
        selectElement.nextElementSibling.classList.add('current')
    }
}, 3000)