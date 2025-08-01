

let arr = [5, 3, 6, 8, 9, 7, 4, 1, 12];

function QuickSort(arr, low = 0, high = arr.length - 1) {

    if (low < high) {
        const pivot = partition(arr, low, high);

        QuickSort(arr, low, pivot - 1);
        QuickSort(arr, pivot + 1, high);
    }
}

function partition(arr, low, high) {

    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;

}


console.log(arr)
QuickSort(arr)
console.log(arr)