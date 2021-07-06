let sampleStr = "a";
let num = 100000;

function repeatedString(s, n) {
    let subString = "";
    let numA = 0;
    if (s.length > n) {
        subString = s.slice(0, n);
    }
    else if (s.length < n) {
        let repeatNum = Math.floor(n / s.length); // 2
        console.log
        let remainder = n % s.length; // 3
        subString = s.repeat(repeatNum); // abcacabcac
        for (let i = 0; i < remainder; i++) {
            subString += s[i];
        }
    }
    for (let i = 0; i < subString.length; i++) {
        if (subString[i] === "a") {
            numA += 1;
        }
    }
    return numA;
}

let output = repeatedString(sampleStr, num);
console.log(output);
