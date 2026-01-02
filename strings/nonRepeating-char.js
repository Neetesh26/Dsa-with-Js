// Find the first non-repeating character in a string



// Input:  "swiss"
// Output: w


function firstNonRepeatingChar(str) {
    let freq = {};

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (freq[ch]) {
            freq[ch]++;
        } else {
            freq[ch] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]] === 1) {
            return str[i];
        }
    }

    return -1;
}

