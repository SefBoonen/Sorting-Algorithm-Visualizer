function partition(low, high) {
    let pivot = lines[high];

    let i = low - 1;

    for(let j = low; j < high; j++) {
        if(lines[j] < pivot) {
            i++;
            [lines[i], lines[j]] = [lines[j], lines[i]];
            setLinesToContainer(lines);
        }
    }

    [lines[i + 1], lines[high]] = [lines[high], lines[i + 1]]; 
    setLinesToContainer(lines);
    return i + 1;
}

function quickSort(low, high) {
    if(low < high) {
        let pi = partition(low, high);

        quickSort(low, pi - 1);
        quickSort(pi + 1, high);
    }
}