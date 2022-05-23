const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const createDiv = document.createElement('div');
const gridLabel = document.querySelector('#grid-label');

createDiv.classList.add('div');



let divCount = 0; //the amount of divs added to the container


// replace the grid with one of the grid function
function grid8x8() {
    document.getElementById('container').className = 'grid8x8';
    gridLabel.textContent = 'Grid 8x8';

    if (container.childNodes.length > 1) {
        for (divCount; divCount !== 0; divCount--) {
            container.removeChild(container.lastChild);

        }

        for (divCount = 0; divCount !== 64; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction()

    } else {
        for (divCount = 0; divCount !== 64; divCount++) {
            container.appendChild(createDiv.cloneNode(true));
        }

        divFunction();
    }

    
}

function grid16x16() {
    document.getElementById('container').className = 'grid16x16';
    gridLabel.textContent = 'Grid 16x16';

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
    gridLabel.textContent = 'Grid 64x64';

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
    gridLabel.textContent = 'Grid 100x100';

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

// new grid button
const dropBtn = document.querySelector('.dropbtn');

dropBtn.addEventListener('click', dropToggle);

function dropToggle() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
// when the menu is open and user clicks something else the menu closes
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropDowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropDowns.length; i++) {
            let openDropdown = dropDowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

// dropdown content
const grid8 = document.querySelector('#grid8');
const grid16 = document.querySelector('#grid16');
const grid64 = document.querySelector('#grid64');
const grid100 = document.querySelector('#grid100');

grid8.addEventListener("click", () => {grid8x8() });
grid16.addEventListener("click", () => {grid16x16() });
grid64.addEventListener("click", () => {grid64x64() });
grid100.addEventListener("click", () => {grid100x100() });



grid16x16();