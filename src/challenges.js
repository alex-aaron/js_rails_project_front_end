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
                else {
                    return false;
                }
            }
        }
    }
    else {
        console.log("word is even");
        let stopIndex = (str.length / 2) - 1;
        console.log(stopIndex);
        for (let i = 0; i < stopIndex; i++) {
            if (str[i] === str[str.length - (i + 1)]) {
                letterMatch += 1;
                console.log(letterMatch);
                if (letterMatch === str.length /2) {
                    return true;
                }
                else {
                    return false
                }
            }
        }
    }
}

let output = isPalindrome(word);
console.log(output);