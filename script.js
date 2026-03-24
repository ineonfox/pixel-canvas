const defaultGridSize = 16;
const canvas = document.querySelector('.canvas');
createGrid(defaultGridSize);

function createGrid(size) {
    let canvasSize = canvas.offsetWidth;
    let cellSize = canvasSize / size;
    console.log(canvasSize);

    for(let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.style.outline = 'rgb(190, 190, 190) solid 1px';
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        canvas.appendChild(cell);
    }
}