async function booblesort() {
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
            }
        }
        if(!swapped) {
            break;
        }    
    }
}

