let num = 9;
let sampleArr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
    let sockObj = {};
    let numPairs = 0;
    for (const element of ar) {
        if (sockObj[element] === undefined) {
            sockObj[element] = 1;
        }
        else {
            sockObj[element] += 1;
        }
    }
    for (let key in sockObj) {
        if (sockObj[key] % 2 === 0) {
            let indPairs = sockObj[key] / 2;
            numPairs += indPairs;
        }
        else {
            indPairs = Math.floor(sockObj[key] / 2);
            numPairs += indPairs;
        }
    }
    return numPairs;
}

let output = sockMerchant(num, sampleArr);
console.log(output);
