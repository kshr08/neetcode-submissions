class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0; // pointer for s

    for (let j = 0; j < t.length; j++) {
        if (i < s.length && s[i] === t[j]) {
            i++;
        }
    }

    return i === s.length;
    }
}
