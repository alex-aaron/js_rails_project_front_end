let word = "alex";

function isPalindrome(str) {
    let letterMatch = 0;
    if (str.length % 2 !== 0) {
        let oddMidIndex = Math.floor(str.length / 2);
        for (let i = 0; i < oddMidIndex; i++) {
            if (str[i] === str[str.length - (i + 1)]) {
                letterMatch += 1;
                if (letterMatch === Math.floor(str.length / 2)) {
                    return true;
                }
            }
        }
    }
    else {
        console.log("word is even");
        let stopIndex = str.length / 3;
        for (let i = 0; i <= stopIndex; i++) {
            if (str[i] === str[str.length - (i + 1)]) {
                letterMatch += 1;
                if (letterMatch === str.length /2) {
                    return true;
                }
            }
        }
    }
}

let output = isPalindrome(word);
console.log(output);