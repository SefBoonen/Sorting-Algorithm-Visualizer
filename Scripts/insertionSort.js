async function insertionSort(delay) {
    for(i = 0; i < lines.length; i++) {
        if(lines[i] > lines[i + 1]) {
            document.getElementById(`l${lines[i]}`).style.borderColor = "black";
            document.getElementById(`l${lines[i + 1]}`).style.borderColor = "black";
            let swap = lines[i];
            lines[i] = lines[i + 1];
            lines[i + 1] = swap;
            await wait(delay);
            setLinesToContainer(lines);
        }

        for(j = i + 1; j > 0; j--) {
            if(lines[j] < lines[j - 1]) {
                document.getElementById(`l${lines[j]}`).style.borderColor = "black";
                document.getElementById(`l${lines[j + 1]}`).style.borderColor = "black";
                let swap = lines[j];
                lines[j] = lines[j - 1];
                lines[j - 1] = swap;
                await wait(delay);
                setLinesToContainer(lines);
            } else {
                continue;
            }
        } 
        
    }
}