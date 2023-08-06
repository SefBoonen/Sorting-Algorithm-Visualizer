async function bogoSort(delay) {
    while(!isSorted()) {
        await wait(delay);
        lines = randomiseArray(lines);
        setLinesToContainer(lines);
    }
}

function isSorted() {
    for(let i = 0; i < lines.length - 1; i++) {
        if (lines[i] > lines[i + 1]) {
            return false;
        }
    }
    return true;
}