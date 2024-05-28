// Challenge 4
/* 
4. Write a function named firstPalindrome which takes a parameter: words. Given an array of string words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
*/
let words = ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(words)); // Output: "ada"

words = ["not", "a", "palindrome"];
console.log(firstPalindrome(words)); // Output: ""

function firstPalindrome(words) {
    // Helper function to check if a string is a palindrome
    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }

    // Iterate over the array of words
    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i]; // Return the first palindromic string
        }
    }

    return ""; // Return an empty string if no palindromic string is found
}