const defaultGridSize = 16;
const canvas = document.querySelector('.canvas');
let isRandomColors = false;

createGrid(defaultGridSize);

function createGrid(size) {
    let canvasWidth = canvas.offsetWidth;
    let canvasHeight = canvas.offsetHeight;
    let cellWidth = canvasWidth / size;
    let cellHeight = canvasHeight / size;

    for(let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.style.outline = 'rgb(190, 190, 190) solid 1px';
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        canvas.appendChild(cell);

        cell.addEventListener('mouseover', changeCellColor);
    }
}

function changeCellColor(evt) {
    let currentOpacity = evt.target.style.backgroundColor.split(',');
    
    let rgb = [0, 0, 0];
    if (currentOpacity.length === 1) {
        if (isRandomColors) {
            for (let i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor(Math.random() * 255);
            }
        }
        evt.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.1)`;
    }
    else {
        for (let i = 0; i < currentOpacity.length; i ++) {
            rgb[i] = currentOpacity[i].match(/\d+/)[0];
        }
        // when cell is fully colored, opacity value is not reported, therefore .length = 3
        if (currentOpacity.length >= 4) {
            currentOpacity = currentOpacity[3].substring(1,4);
        }
        evt.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${Number(currentOpacity) + 0.1})`;
    }  
}

const btnGridSize = document.querySelector('#grid-size');
btnGridSize.addEventListener('click', changeGridSize);

function changeGridSize() {
    const userGridSize = +prompt('Would you like to change the grid size? Enter one number between 1-100.');
    if (userGridSize) {
        if (userGridSize > 0 && userGridSize <= 100) {
            deleteGrid();
            createGrid(userGridSize);
        }
    }
}

function deleteGrid() {
    while (canvas.children.length > 0) {
        canvas.removeChild(canvas.lastChild);
    }
}

const btnClearGrid = document.querySelector('#clear-grid');
btnClearGrid.addEventListener('click', clearGrid);

function clearGrid() {
    for (const child of canvas.children) {
        child.style.backgroundColor = '';
    }
}

const btnRandomColors = document.querySelector('#random-color');
btnRandomColors.addEventListener('click', toggleRandomColors);

function toggleRandomColors(evt) {
    isRandomColors = !isRandomColors;

    if (isRandomColors) {
        evt.target.textContent = 'Back to black & white';
    }
    else {
        evt.target.textContent = 'Color with randomness!';
    }
}