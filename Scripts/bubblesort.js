async function bubbleSort() {
    for(i = lines.length - 1; i >= 0; i--) {
        let swapped = false;
        for(j = 0; j < i; j++) {
            
            if(lines[j] > lines[j + 1]) {
                await Sleep(100);
                let swap = lines[j];
                lines[j] = lines[j + 1];
                lines[j + 1] = swap;
                swapped = true;
                setLinesToContainer(lines);
                document.getElementById(`l${lines[j]}`).style.borderColor = "black";
            }
        }
        if(!swapped) {
            break;
        }    
    }
}

