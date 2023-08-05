async function insertionSort(delay) {
    let sorted = [];
    for(i = 0; i < lines.length; i++) {
        
        if(lines[i] > lines[i + 1]) {
            let swap = lines[i];
            lines[i] = lines[i + 1];
            lines[i + 1] = swap;
            sorted.push(lines[i]);
        } else {
            sorted.push(lines[i]);
        }

        for(j = sorted.length; j > 0; j--) {
            if(sorted[j] < sorted[j - 1]) {
                let swap = sorted[j];
                sorted[j] = sorted[j - 1];
                sorted[j - 1] = swap;
            } else {
                continue;
            }
            setLinesToContainer(sorted);
        } 
        await wait(delay);
    }
}