import { bubbleSort } from "./sorting-algorithms/bubbleSort.mjs";

// In input variables
const sAddLine = document.getElementById("addline");
const bSort = document.getElementById("sort");
const bRandomise = document.getElementById("randomise");
const sSortSpeed = document.getElementById("sortspeed");
const menuSorting = document.getElementById("sorting-algorithm");
const bStop = document.getElementById("stop");

const container = document.getElementById("container");

const heightContainer = screen.height * 0.8;
const widthContainer = screen.width * 0.8;

const sortSpeedNum = document.getElementById("sortspeednum");

let lines = [];

let stop = false;

// Set lines when page is loaded
document.addEventListener('DOMContentLoaded', addLines(lines));

sSortSpeed.oninput = () => {
    sortSpeedNum.value = sSortSpeed.value;
}

// Adding and removing Lines slider 
sAddLine.oninput = () => {
    addLines();
}

function addLines() {
    lines = [];
    for(let i = 1; i <= sAddLine.value; i++) {
        lines.push(i);
    }
    setLinesToContainer(lines);
}

bStop.addEventListener("click", () => {
    stop = true;
    setTimeout(() => {
        stop = false;
    }, 1000);
});

// Randomise lines button
bRandomise.addEventListener('click', () => {
    lines = randomiseArray(lines);
    setLinesToContainer(lines);
});

// Start sorting the lines
bSort.addEventListener('click', async () => {
    setDisabledInputs(true);
    if(menuSorting.value =="bubblesort") {
        await bubbleSort(sSortSpeed.value);
    }
    setDisabledInputs(false);
});

// Set the lines in the table element according the the array
function setLinesToContainer(array) {
    let htmlLines = [];
    array.forEach(element => {
        htmlLines.push(`<td valign="bottom"> <div id="l${element}" style="border-left: ${widthContainer / 100}px solid green; height: ${(heightContainer / 100) * element}px;"></div> </td>`);
    });
    container.innerHTML = htmlLines.join("");
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

// Add delay to sorting algorithms
function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function setDisabledInputs(bool) {
    sAddLine.disabled = bool;
    bSort.disabled = bool;
    bRandomise.disabled = bool;
    sSortSpeed.disabled = bool;
    menuSorting.disabled = bool;
}

export { lines, setLinesToContainer, stop, wait }