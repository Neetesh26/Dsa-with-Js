
var isPalindrome = function (x) {
    if (x < 0) return false;

    let original = x;
    let rev = 0;

    while (x > 0) {
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = (x - digit) / 10;
    }

    return original === rev;
};
isPalindrome(121);

console.log(isPalindrome(121));