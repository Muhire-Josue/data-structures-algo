const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    //Code here
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
}

function selectionSort(array) {
    //Code Here
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        let temp = array[i];
        array[i] = array[min];
        array[i + 1] = temp;
    }
    return array;
}

console.log(selectionSort(numbers));

// bubbleSort(numbers);
// console.log(numbers);
