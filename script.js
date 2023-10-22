const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('button-container');
document.body.append(buttonsContainer);

const setGrid = document.createElement('button');
setGrid.innerText = 'Change grid size';
buttonsContainer.append(setGrid);

const setBlack = document.createElement('button');
setBlack.innerText = 'Black & White';
buttonsContainer.append(setBlack);

const setRGB = document.createElement('button');
setRGB.innerText = 'RGB Colors';
buttonsContainer.append(setRGB);

const darkeningEffect = document.createElement('button');
darkeningEffect.innerText = 'Darkening Effect';
buttonsContainer.append(darkeningEffect);

let numberOfSquares = 16;
let opacity = 0;

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

setBlack.addEventListener('click', () => {
    const squares = document.getElementsByClassName('square');

    for (const square of squares) {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `rgb(0, 0, 0)`;
        });
    };
});

setRGB.addEventListener('click', () => {
    const squares = document.getElementsByClassName('square');

    for (const square of squares) {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `${randomRGB()}`;
        });
    };
});

darkeningEffect.addEventListener('click', () => {
    opacity = 0;
    const squares = document.getElementsByClassName('square');

    for (const square of squares) {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            if (opacity < 1) {
                opacity += 0.1;
            }
        });
    };
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

function randomRGB() {
    const rgbValues = [];

    for (let i = 0; i < 3; i++) {
        let randomValue = Math.floor(Math.random() * 256);
        rgbValues.push(randomValue);
    };

    let rgbColor = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
    
    return rgbColor;
};