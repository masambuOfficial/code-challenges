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
