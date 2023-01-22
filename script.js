function threeSum(arr, target) {
  //your code here
    arr.sort((a,b) => a-b);  // sort the array

    let closestSum = Infinity;  // initialize closestSum as infinity
    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1; 
        let k = arr.length - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }

            closestSum = Math.abs(sum - target) < Math.abs(closestSum - target) ? sum : closestSum;
        }
    }
    return closestSum;
}



module.exports = threeSum;
