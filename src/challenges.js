let sampleArr = [
    -9, -9, -9, 1, 1, 1,
     0, -9, 0,  4, 3, 2,
    -9, -9, -9, 1, 2, 3,
     0,  0,  8, 6, 6, 0,
     0,  0,  0, -2, 0, 0,
     0,  0,  1,  2, 4, 0
]

function hourglassSum(arr) {
    let sumArr = [];
    let largestSum = 0;
    let hourglassIndices = [0, 1, 2, 3, 
                            6, 7, 8, 9,
                            12, 13, 14, 15,
                            18, 19, 20, 21];
    for (let i = 0; i < arr.length; i++) {
        if (hourglassIndices.includes(i)) {
            let sum = arr[i] + (arr[i + 1]) + (arr[i + 2]) + (arr[i + 7]) + (arr[i + 12]) + (arr[i + 13]) + (arr[i + 14]);
            sumArr.push(sum);
        }
    }
    for (let i = 0; i < sumArr.length; i++) {
        if (sumArr[i] >= largestSum) {
            largestSum = sumArr[i];
        }
    }
    return largestSum;
}

let output = hourglassSum(sampleArr);
console.log(output);
