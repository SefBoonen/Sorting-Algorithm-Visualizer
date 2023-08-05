async function bubbleSort(delay) {
    for(i = lines.length - 1; i >= 0; i--) {
        let swapped = false;
        for(j = 0; j < i; j++) {
            if(lines[j] > lines[j + 1]) {
                document.getElementById(`l${lines[j]}`).style.borderColor = "black";
                document.getElementById(`l${lines[j + 1]}`).style.borderColor = "black";
                await wait(delay);
                let swap = lines[j];
                lines[j] = lines[j + 1];
                lines[j + 1] = swap;
                swapped = true;
                setLinesToContainer(lines);
            }
        }
        if(!swapped) {
            return;
        }    
    }
}
