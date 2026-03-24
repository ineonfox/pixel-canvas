const defaultGridSize = 50;
const canvas = document.querySelector('.canvas');
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
    if (!currentOpacity) {
        evt.target.style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
    }
    else {
        // when cell is fully colored, opacity value is not reported, therefore .length = 3
        if (currentOpacity.length >= 4)
        currentOpacity = currentOpacity[3].substring(1,4);
        evt.target.style.backgroundColor = `rgb(0, 0, 0, ${Number(currentOpacity) + 0.1})`;
    }
    console.log(evt.target.style.backgroundColor);
    
}