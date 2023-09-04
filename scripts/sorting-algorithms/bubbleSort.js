async function bubbleSort(delay) {
    for (i = lines.length - 1; i >= 0; i--) {
        let swapped = false;
        for (j = 0; j < i; j++) {
            document.getElementById(`l${lines[j]}`).className = "selected";
            document.getElementById(`l${lines[j + 1]}`).className = "selected";
            await wait(delay);
            if (stop) {
                return;
            }
            if (lines[j] > lines[j + 1]) {
                [lines[j], lines[j + 1]] = [lines[j + 1], lines[j]];
                swapped = true;
            }
            setLinesToContainer(lines);
        }
        if (!swapped) {
            return;
        }
    }
}

