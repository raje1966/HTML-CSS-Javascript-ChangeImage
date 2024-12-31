const btnsEl = document.querySelector('#btns');
const containerEl = document.querySelector('.container');
const preBtnEl = document.querySelector('.prevBtn');
const nextBtnEl = document.querySelector('.nextBtn');

let counter = 0;

preBtnEl.addEventListener('click', getPrevImage);

nextBtnEl.addEventListener('click', getNextImage);

function getNextImage() {
    containerEl.animate([{ opacity: '0.1' }, {opacity: '1.0'},],{duration: 1000, fill: 'forwards'})
    if (counter === 4) {
        counter = -1;
    }
    counter++;
    containerEl.style.backgroundImage = `url(imgs/img.${counter}.jpg)`
}

function getPrevImage() {
    containerEl.animate([{ opacity: '0.1' }, { opacity: '1.0' },], { duration: 1000, fill: 'forwards' })
    
    if (counter === 0) {
        counter = 5;
    }
    counter--;
    containerEl.style.backgroundImage = `url(imgs/img.${counter}.jpg)`
}