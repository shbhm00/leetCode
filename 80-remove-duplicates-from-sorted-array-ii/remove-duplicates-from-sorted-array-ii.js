/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // if empty or size is 1 or 2
    // if(!nums.length || nums.length==1 || nums.length==2)
    // {
    //     return nums;
    // }

    let i=0;
    let j=1;
    let count=1;
    let numReplaced=0;
    while(i<nums.length)
    {
        if(nums[i]==nums[j])
        {
            count++;
            if(count>2)
            {
                nums[j]=Infinity;
                numReplaced++;
            }
            j++
        }
        else
        {
            i=j;
            j++;
            count=1;
        }
    }
    console.log(nums.sort((a,b)=>a-b))
    return nums.sort((a,b)=>a-b).length-numReplaced;
};