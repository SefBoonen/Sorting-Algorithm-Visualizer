// In input variables
const sAddLine = document.getElementById("addline");
const bSort = document.getElementById("sort");
const bRandomise = document.getElementById("randomise");
const menuSorting = document.getElementById("sorting-algorithm");
const sSortSpeed = document.getElementById("sortspeed");

// Container for the lines
const container = document.getElementById("container");

const sortSpeedNum = document.getElementById("sortspeednum");

let lines = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];

//Stylesheet for bars
let styleSheet = document.createElement("style");
let styleSheetColor = document.createElement("style");

// Set lines when page is loaded
document.addEventListener('DOMContentLoaded', setLinesToContainer(lines));

sSortSpeed.oninput = () => {
    sortSpeedNum.value = sSortSpeed.value;
}

// Lines slider 
sAddLine.oninput = () => {
    styleSheetColor.remove();
    lines = [];
    for(i = 1; i <= sAddLine.value; i++) {
        lines.push(i);
    }
    setLinesToContainer(lines);
}

// Randomise lines button
bRandomise.addEventListener('click', () => {
    lines = randomiseArray(lines);
    setLinesToContainer(lines);
});

// Start sorting the lines
bSort.addEventListener('click', () => {
    if(menuSorting.value =="bubblesort") {
        bubbleSort(sSortSpeed.value);
    } else if (menuSorting.value == "bogosort") {
        bogoSort(sSortSpeed.value);
    } else if (menuSorting.value == "insertionsort") {
        insertionSort(sSortSpeed.value);
    } else if (menuSorting.value == "mergesort") {
        mergeSort(sSortSpeed.value);
    }
});

// Set the lines in the table element according the the array
function setLinesToContainer(array) {
    let htmlLines = [];
    let styles = "";
    array.forEach(element => {
        htmlLines.push(`<td valign="bottom"> <div id="l${element}"></div> </td>`);
        
        styles += `#l${element} {
            border-left: 20px solid green;
            height: ${element * 20}px;
            width: 0;
            float: left;
            margin: 1px;
        }`;
    });
    container.innerHTML = htmlLines.join("");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

// Randomise values in array function
function randomiseArray(array) {
    let currentIndex = array.length, randomIndex;
    while(currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
    }
    return array;
}

function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}