const container = document.querySelector('#container');
const createDiv = document.createElement('div');
const reset = document.querySelector('#reset');

createDiv.classList.add('div');



let divCount = 0; //the amount of divs added to the container


// replace the grid with one of the grid function
function grid4x4() {
    document.getElementById('container').className = 'grid4x4';

    if (container.childNodes.length > 1) {
        for (divCount; divCount !== 0; divCount--) {
            container.removeChild(container.lastChild);

        }

        for (divCount = 0; divCount !== 16; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction()

    } else {
        for (divCount = 0; divCount !== 16; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction();
    }

    
}

function grid16x16() {
    document.getElementById('container').className = 'grid16x16';

    if (container.childNodes.length > 1) {
        for (divCount; divCount !== 0; divCount--) {
            container.removeChild(container.lastChild);

        }

        for (divCount = 0; divCount !== 256; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction();

    } else {
        for (divCount = 0; divCount !== 256; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction();
    }

    
}

function grid64x64() {
    document.getElementById('container').className = 'grid64x64';

    if (container.childNodes.length > 1) {
        for (divCount; divCount !== 0; divCount--) {
            container.removeChild(container.lastChild);

        }

        for (divCount = 0; divCount !== 4096; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction();

    } else {
        for (divCount = 0; divCount !== 4096; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction();
    }

    i = 0;
}

function grid100x100() {
    document.getElementById('container').className = 'grid100x100';

    if (container.childNodes.length > 1) {
        for (divCount; divCount !== 0; divCount--) {
            container.removeChild(container.lastChild);

        }

        for (divCount = 0; divCount !== 10000; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction();

    } else {
        for (divCount = 0; divCount !== 10000; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction();
    }

    
}


//reset button
//when button is click the grid reset to the default grid 'grid16x16'

reset.addEventListener('click', () => {
    grid16x16();
});

// when mouse hover over div the div change class
let div = document.getElementsByClassName("div");



function divFunction() {
    for (let i = 0; i <= divCount; i++) {
        div[i].addEventListener('mouseover', function() {
            div[i].classList.add('black');
        });
    }
    
}

grid16x16();
