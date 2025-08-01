// the binary search only work when  ti is sorted :
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    let mid = Math.floor((end + start) / 2);

    while (start <= end) {
        if (arr[mid] === target) {
            console.log("the elelmnt is found")
            return arr[mid];
        }
        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid;
        }

        mid = Math.floor((end + start) / 2);
    }

    console.log("elemtn not found");
    return -1
}

console.log(binarySearch(arr, 7))