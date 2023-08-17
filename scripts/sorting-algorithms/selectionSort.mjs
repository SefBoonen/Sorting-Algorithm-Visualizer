async function selectionSort(delay) {
    let smallest = Infinity;
    let indexswap = 0;
    for(i = 0; i < lines.length; i++) {
        for(j = i; j < lines.length; j++) {
            if(stop) {
                return;
            }
            document.getElementById(`l${lines[j]}`).style.borderColor = "red";
            document.getElementById(`l${lines[indexswap]}`).style.borderColor = "red";
            document.getElementById(`l${lines[i]}`).style.borderColor = "yellow";
            await wait(delay);
            setLinesToContainer(lines);
            if(lines[j] < smallest) {
                smallest = lines[j];
                indexswap = j;
            }
        }
        lines[indexswap] = lines[i];
        lines[i] = smallest;
        smallest = Infinity;
        setLinesToContainer(lines);
    }
}