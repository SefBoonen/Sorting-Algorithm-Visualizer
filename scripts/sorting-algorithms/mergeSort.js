async function mergeSort(delay) {
    console.log(merge(lines, lines1));
}

function merge(arr1, arr2) {
    let sorted = [];

    while(arr1.length > 0 && arr2.length > 0) {
        if(arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        } else if (arr2[0] < arr1[0]) {
            sorted.push(arr2.shift());
        }
    }

    if(arr1.length < 1) {
        sorted = sorted.concat(arr2)
    } else if (arr2.length < 1) {
        sorted = sorted.concat(arr1)
    }

    return sorted;
}
