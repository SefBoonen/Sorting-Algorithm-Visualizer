async function mergeSort(arr, delay) {
    if(arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = await mergeSort(arr.slice(0, mid));
    let right = await mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(low1, high1, low2, high2) {
    let lines = [7,8,9,1,5,10];
    let cpy = lines.slice();
    
    while(low1 <= high1 && low2 <= high2) {
        if(cpy[low1] < cpy[low2]) {
            lines.splice(lines.indexOf(cpy[low1]), 1);
            lines.push(cpy[low1])
            low1++;
        } else {
            lines.splice(lines.indexOf(cpy[low2]), 1);
            lines.push(cpy[low2])
            low2++;
        }
        console.log(lines);
    }
}