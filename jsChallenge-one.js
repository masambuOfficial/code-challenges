// Challenge 1
function fizzbuzz(para1, para2){
    if (para1.length%3 === 0 && para2.length%3 === 0 ){
        console.log('Fizz');
    }else if(para1.length%5 === 0 && para2.length%5 === 0 ){
        console.log('FizzBuzz');
    }else if(para1.length%5 === 0 && para2.length%5 === 0 || para1.length%5 === 0 && para2.length%5 === 0){
        console.log('FizzBuzz');
    }else{
        console.log("Null");
    }
}
fizzbuzz("Sugar", "Highlights");


// Challenge 2

function twoSum(nums, target) {

    // Create a map to store the complement of each number and its index
    const numMap = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        let complement = target - nums[i];
        
        // If the complement exists in the map, return its index and the current index
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        // Otherwise, store the current number and its index in the map
        numMap.set(nums[i], i);
    }
    
    // If no solution is found, return an empty array
    return [];
}

// Array of numbers nums and An integer target
let nums = [7, 2, 11, 15, 20, 14, 16];
let target = 18;
console.log(twoSum(nums, target)); // Output: [0, 2] (because nums[0] + nums[2] = 7 + 11 = 18)


// Challenge 3

/* 
    Write a function named twoSum which takes two parameters: nums and target. 
    Given an array of numbers nums and an integer target, return indices of the two numbers such that they add up to the target. 
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

*/

function twoSum(nums, target) {

    // Create a map to store the complement of each number and its index
    const numMap = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        let complement = target - nums[i];
        
        // If the complement exists in the map, return its index and the current index
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        // Otherwise, store the current number and its index in the map
        numMap.set(nums[i], i);
    }
    
    // If no solution is found, return an empty array
    return [];
}


// Challenge 4
/* 
4. Write a function named firstPalindrome which takes a parameter: words. Given an array of string words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
*/

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