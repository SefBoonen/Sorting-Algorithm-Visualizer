async function insertionSort(delay) {
    for(i = 1; i < lines.length; i++) {
        let key = lines[i];
        j = i - 1;

        while(j >= 0 && lines[j] > key) {
            document.getElementById(`l${lines[j]}`).style.borderColor = "red";
            document.getElementById(`l${lines[j + 1]}`).style.borderColor = "red";
            await wait(delay);
            lines[j + 1] = lines[j];
            j--;
            setLinesToContainer(lines);
        }
        lines[j + 1] = key;
        setLinesToContainer(lines);
    }
}