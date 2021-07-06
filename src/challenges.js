let arr = [0, 0, 1, 0, 0, 1, 0];

function jumpingOnClouds(c) {
    let jumps = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i + 1] === 0) {
            jumps += 1;
        }
    }
    return jumps;
}

let output = jumpingOnClouds(arr);
console.log(output);