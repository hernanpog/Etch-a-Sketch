const setGrid = document.createElement('button');
setGrid.innerText = 'Change grid size';
document.body.append(setGrid);

let numberOfSquares = 16;

createGrid(numberOfSquares);
addEvent();

setGrid.addEventListener('click', () => {
    numberOfSquares = prompt('Enter the new size of the grid:');
    numberOfSquares = parseInt(numberOfSquares);
    while (numberOfSquares < 2 || numberOfSquares > 100 || !numberOfSquares) {
        numberOfSquares = prompt('Please enter a valid number (between 2 and 100):');
        numberOfSquares = parseInt(numberOfSquares);
    };
    document.querySelector('.container').remove();

    createGrid(numberOfSquares);
    addEvent();
});

function createGrid(squaresAmount) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('container');
    document.body.append(divContainer);
    
    divContainer.style.gridTemplateColumns = `repeat(${squaresAmount}, auto)`;

    for (let i = 0; i < squaresAmount; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');
        divContainer.append(newDiv);

        for (let j = 1; j < squaresAmount; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('square');
            divContainer.append(newDiv);
        };
    };
};

function addEvent() {
    const squares = document.getElementsByClassName('square');

    for (const square of squares) {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    };
};