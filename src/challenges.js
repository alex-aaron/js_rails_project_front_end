let word = "racecar";

function isPalindrome(str) {
    let palindrome;
    if (str.length % 2 !== 0) {
        let oddMidIndex = Math.floor(str.length / 2);
        for (let i = 0; i < oddMidIndex; i++) {
            if (str[i] === str[str.length - (i + 1)]) {
                
                return letterMatch;
            }
        }
    }
    else {
        let stopIndex = str.length / 3;
        for (let i = 0; i <= stopIndex; i++) {
            if (str[i] === str[str.length - (i + 1)])
            letterMatch += 1;
        }
    }
}

let output = isPalindrome(word);
console.log(output);