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
} 

containerMaker(16);