let sampleArr = [1, 2, 3, 5, 6, 7];

const sevenBoom = arr => {
    if (arr.includes(7)) {
        console.log("Boom!");
    }
    else {
        console.log("there is no 7 in the array");
    }

}

sevenBoom(sampleArr);
