/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let max = Math.max(...candies)

    for (let i in candies){
        if(candies[i] + extraCandies >= max){
            candies[i] = true
        }else{
            candies[i] = false
        }
    }
    return candies
};
