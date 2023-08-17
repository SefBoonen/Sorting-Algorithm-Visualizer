import { setLinesToContainer, lines } from "../index.js";

export async function bubbleSort(delay) {
    for(let i = lines.length - 1; i >= 0; i--) {
        let swapped = false;
        for(let j = 0; j < i; j++) {
            if(stop) {
                return;
            }
            if(lines[j] > lines[j + 1]) {
                document.getElementById(`l${lines[j]}`).style.borderColor = "red";
                document.getElementById(`l${lines[j + 1]}`).style.borderColor = "red";
                await wait(delay);
                [lines[j], lines[j + 1]] = [lines[j + 1], lines[j]];
                swapped = true;
                setLinesToContainer(lines);
            }
        }
        if(!swapped) {
            return;
        }    
    }
}

