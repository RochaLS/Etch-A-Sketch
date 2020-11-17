const sketchContainer = document.querySelector('.sketch-container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.className = 'cell';
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
            // div.style.backgroundColor = `rgb(${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 10) + 1)})`;
        })

        sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        sketchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        sketchContainer.appendChild(div);
    }
}

function menuSetup() {
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click', (e) => {
        clearGrid()
        askGridSize()
    })
}

function clearGrid() {
    document.querySelectorAll('.cell').forEach(e => e.remove()); 
}

function askGridSize() {
    const size = prompt('Type a grid size from 2 to 100');

    if (size >= 2 && size <= 100) {
        createGrid(size);
    } else {
        alert('Invalid Size');
        createGrid(16);
    }
}

createGrid(16); // 16x16
menuSetup()