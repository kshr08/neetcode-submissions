class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        
        for(let word of strs) {
           let newWord = word.split("").sort().join();
            if(!map.has(newWord)) {
                map.set(newWord, [])
            }

            map.get(newWord).push(word);
        }
         return Array.from(map.values());
    }
}
