async function partition(delay, low, high) {
    let pivot = lines[high];

    let i = low - 1;

    for(let j = low; j < high; j++) {
        if(lines[j] < pivot) {
            i++;
            document.getElementById(`l${lines[i]}`).style.borderColor = "red";
            document.getElementById(`l${lines[j]}`).style.borderColor = "red";
            [lines[i], lines[j]] = [lines[j], lines[i]];
            await wait(delay);
            setLinesToContainer(lines);
            
        }
    }
    document.getElementById(`l${lines[i + 1]}`).style.borderColor = "red";
    document.getElementById(`l${lines[high]}`).style.borderColor = "red";

    [lines[i + 1], lines[high]] = [lines[high], lines[i + 1]]; 
    await wait(delay);
    setLinesToContainer(lines);
    
    return i + 1;
}

async function quickSort(delay, low, high) {
    if(low < high) {
        let pi = await partition(delay, low, high);

        await quickSort(delay, low, pi - 1);
        await quickSort(delay, pi + 1, high);
    }
}