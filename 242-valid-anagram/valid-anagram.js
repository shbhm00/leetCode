/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const visitedLetter = new Map();
    if (s.length != t.length) {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        visitedLetter.set(s[i], (visitedLetter.get(s[i]) || 0) + 1)
    }

    for (let i = 0; i < t.length; i++) {
        const count = visitedLetter.get(t[i]);
        if (!count) {
            return false;
        }

        visitedLetter.set(t[i], count - 1);

        if (count - 1 === 0) {
            visitedLetter.delete(t[i]);
        }
    };
    return true
}