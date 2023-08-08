function quickSort(arr, delay = 0) {
    if(arr.length <= 1) {
        return arr;
    }

    let pivot = arr.pop();

    let left = [];
    let right = [];

    for(i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
}