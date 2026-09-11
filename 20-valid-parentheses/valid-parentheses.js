/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let validator = [];

    if (s.length === 0 || s.length === 1) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        // Opening brackets → push into stack
        if (current === "(" || current === "{" || current === "[") {
            validator.push(current);
            continue;
        }

        // Closing bracket but stack is empty
        if (validator.length === 0) {
            return false;
        }

        const topElement = validator[validator.length - 1];

        // Check whether closing bracket matches top of stack
        if (
            (current === ")" && topElement === "(") ||
            (current === "}" && topElement === "{") ||
            (current === "]" && topElement === "[")
        ) {
            validator.pop();
        } else {
            return false;
        }
    }

    return validator.length === 0;
};