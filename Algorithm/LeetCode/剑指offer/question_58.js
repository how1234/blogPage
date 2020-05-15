/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    //至少含有2个数证明target大于等于2，所以不用考虑target小于等于2的情况

    let leftP = 1
    let rightP = 2
    
    let res = []


    while(rightP <= (target >> 1) + 1 ){ //滑动窗口右指针一定不超过中值，
        // 比如当target为9时，右指针不可能超过5，因为5+4 = 9，4比5小。
        //[leftP,rightP] 区间之和
        let sum = (leftP +rightP) * (rightP - leftP + 1) / 2 
        
        if(sum < target){ //如果这个区间之和小于目标值，右指针移动。
            rightP++
        }else if(sum === target){
            let tempRes = []
            for(let i = leftP;i<=rightP;i++){
                tempRes.push(i) 
            }
            res.push(tempRes)
            
            //扩大指针寻找另一个窗口
            rightP++
        }else{ //区间之和大于目标值，减小窗口
            leftP++
        }
    }
    return res
};