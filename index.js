const sketchContainer = document.querySelector('.sketch-container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.className = 'cell';
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });

        sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        sketchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        sketchContainer.appendChild(div);
    }
}

function menuSetup() {
    const slider = document.getElementById('myRange');
    const sliderContainer = document.querySelector('.slidecontainer');
    const sliderValueText = document.querySelector('.sliderValue');
    slider.addEventListener('input', () => {
        clearGrid();
        createGrid(slider.value);
        sliderValueText.innerText = `${slider.value}x${slider.value}`;
    })

    sliderContainer.appendChild(sliderValueText);  
}

function clearGrid() {
    document.querySelectorAll('.cell').forEach(e => e.remove()); 
}

createGrid(16); // 16x16
menuSetup()
