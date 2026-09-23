/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let left = 0;
    let right = s.length - 1;
    const chars = s.split("")
    while (left < right) {
        // created a temp variable to keep words so that it won't override during swap
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
    }
    let start = 0;

    for (let i = 0; i <= chars.length; i++) {
        if (i === chars.length || chars[i] === " ") {
            let left1 = start;
            let right2 = i - 1;
            while (left1 < right2) {
                let temp = chars[left1];
                chars[left1] = chars[right2];
                chars[right2] = temp;
                left1++;
                right2--;
            }
            start = i + 1;
        }
    }
    let i = 0
    while (i < chars.length) {
        if (chars[i] === " " && chars[i + 1] === " ") {
            chars.splice(i, 1);
            continue;
        }

        i++;
    }
    while (chars[0] === " ") {
        chars.splice(0, 1);
    }

    while (chars[chars.length - 1] === " ") {
        chars.splice(chars.length - 1, 1);
    }
    return chars.join("");
};