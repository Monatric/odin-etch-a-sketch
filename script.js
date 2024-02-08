const divSquare = document.createElement('div');
const divSquareCont = document.createElement('div');
const gridContainer = document.querySelector('.grid-container');

divSquare.classList.add('div-square');
divSquareCont.classList.add('div-square-cont');

function containerMaker(pixels) {
    let i = 0;
    while (i < pixels) {
        const divSquareContClone = divSquareCont.cloneNode(true);
        gridContainer.appendChild(divSquareContClone);
        i++;
    }

    const allDivSquareContClone = document.querySelectorAll('.div-square-cont');    
    allDivSquareContClone.forEach((element) => {
        for (let j = 0; j < pixels; j++) {
            const divSquareClone = divSquare.cloneNode(true);
            element.appendChild(divSquareClone);
        }
    })

    const allDivSquare = document.querySelectorAll('.div-square');
    allDivSquare.forEach(square => {
        square.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'black'; 
        })
    })
} 

containerMaker(16);

const btnCustomize = document.querySelector('#btn-customize');
btnCustomize.addEventListener('click', (event) =>{
    let promptCustomize = prompt("Set a number of pixels (ONLY 1-100)");
})