async function partition(delay, low, high) {
    let pivot = lines[high];

    let i = low - 1;

    for(let j = low; j < high; j++) {
        if(lines[j] < pivot) {
            i++;
            [lines[i], lines[j]] = [lines[j], lines[i]];
            setLinesToContainer(lines);
            await wait(delay)
        }
    }

    [lines[i + 1], lines[high]] = [lines[high], lines[i + 1]]; 
    setLinesToContainer(lines);
    await wait(delay)
    return i + 1;
}

async function quickSort(delay, low, high) {
    if(low < high) {
        let pi = await partition(delay, low, high);

        await quickSort(delay, low, pi - 1);
        await quickSort(delay, pi + 1, high);
    }
}