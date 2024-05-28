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