let sampleStr = "abcac";
let num = 13;

function repeatedString(s, n) {
    let subString = "";
    let numA = 0;
    if (s.length > n) {
        subString = s.slice(0, n);
    }
    else if (s.length < n) {
        let repeat = Math.floor(n / s.length); // 2
        let remainder = n % s.length; // 3
        subString = s.repeat(2); // abcacabcac
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
