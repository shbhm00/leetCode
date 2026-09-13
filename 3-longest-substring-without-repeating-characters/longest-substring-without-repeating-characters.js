/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let maxLength = 0;

    const visitedWords = new Set();

/**
example= abcabcbb
    i   j   substring   count
    0   0   a           1
    0   1   ab          2
    0   2   abc         3
    0   3   


 */
    for (let j = 0; j < s.length; j++) {

        // If the current character already exists,
        // move the left pointer until the duplicate is removed.
        while (visitedWords.has(s[j])) {
            visitedWords.delete(s[i]);
            i++;
        }

        // Add the current character to the window.
        visitedWords.add(s[j]);

        // Calculate the current window length.
        maxLength = Math.max(maxLength, j - i + 1);
    }

    return maxLength;
};