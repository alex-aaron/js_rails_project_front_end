let word = "ana";

function isPalindrome(str) {
    if (str.length % 2 !== 0) {
        console.log("string is odd");
    }
    else {
        console.log("string is even");
    }
}

let output = isPalindrome(word);
console.log(output);