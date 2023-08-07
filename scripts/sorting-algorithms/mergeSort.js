async function mergeSort(arr, delay) {
    if(arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = await mergeSort(arr.slice(0, mid));
    let right = await mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(arr1, arr2) {
    let sorted = [];

    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        } else {
            sorted.push(arr2.shift());
        }
    }

    return [...sorted, ...arr1, ...arr2];
}