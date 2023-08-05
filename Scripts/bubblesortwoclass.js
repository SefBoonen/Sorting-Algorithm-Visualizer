function booblesort() {
    for(i = 0; i < lines.length; i++) {
        let swapped = false;
        for(j = 0; j < i; j++) {
            if(lines[j] > lines[j +1]) {
                let swap = lines[j];
                lines[j] = lines[j + 1];
                lines[j + 1] = swap;
                swapped = true;
            }
        }
        
    }
}