/*
* Project Goal
* chane font and bg color and save it to localStorage and also remove it
*
* 1. change font and bg color
* 2. save in localStorage
* 3. reset button
* 4. load from localStorage
* 4. remove from localStorage
* 6. reset default
*
* */

// Dom findings

const slFontSize = document.getElementById('selectFontSize')
const slBgColor = document.getElementById('selectBgColor')
const resetBtn = document.getElementById('resetButton')
const main = document.querySelector('main');

const setupValue = (fontSize, BgColor) => {
    slFontSize.value = fontSize;
    slBgColor.value = BgColor;
    main.style.fontSize = fontSize;
    main.style.backgroundColor = BgColor
}

// Load from LocalStorage
const initialSetup = () => {
    let getFontSize = localStorage.getItem('fontSize')
    let getBgColor = localStorage.getItem('bgColor')

    if (getFontSize && getBgColor) {
        setupValue(getFontSize, getBgColor)
    }
    if (!getFontSize && !getBgColor) {
        setupValue('16px', 'aqua')
    }
    if (getFontSize && !getBgColor) {
        setupValue(getFontSize, 'aqua')
    }
    if (!getFontSize && getBgColor) {
        setupValue('16px', getBgColor)
    }
}


// changeFontSize
const changeFontSize = (event) => {
    let sltFontSize = event.target.value

    main.style.fontSize = sltFontSize;
    localStorage.setItem('fontSize', sltFontSize)
}
// changeBgColor
const changeBgColor = (event) => {
    let sltBgColor = event.target.value
    main.style.backgroundColor = event.target.value
    localStorage.setItem('bgColor', sltBgColor)
}

// resetChange
const resetChange = () => {
    localStorage.removeItem('fontSize')
    localStorage.removeItem('bgColor')
    setupValue('16px', 'aqua')
}

slFontSize.addEventListener('change', changeFontSize)
slBgColor.addEventListener('change', changeBgColor)
resetBtn.addEventListener('click', resetChange)

initialSetup()