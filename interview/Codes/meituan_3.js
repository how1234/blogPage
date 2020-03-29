arr = [3, 1];






    function solution(len,arr){
        let answer = []

        arr.sort()

        helper(arr,0,[],answer)
        checkResult(answer)
        
    }

    function checkResult(answer){
        let count = 0
        for (var i = 1;i<answer.length;i++){
            
            let tempArr = answer[i].split('').reverse()
    
            flag = true
            for (var j= 0;j<tempArr.length;j++){

                let bool = tempArr[j]/j+1 %1 !== 0
                console.log(tempArr[j],j+1,bool)

                if( (tempArr[j]/j+1) %1 !== 0){
                    flag = false
                }
            
                
            }
            console.log(tempArr,flag)
            if(flag){
                count+=1
            }
        
        
            
        
        }
        
    }
    function helper(nums,index,path,answer){   
        answer.push(path)

        for (let i = index;i<nums.length;i++){

            if(i > index && nums[i] === nums[i-1]){
                continue
            }
            helper(nums,i+1,path+[nums[i]],answer)
        }

    }

console.log(solution(2,[3,1]))

console.log(1/1 % 1 ===0)
console.log(1/1 % 1 ===0)