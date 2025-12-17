/**
 * 53. 最大子数组和
 * https://leetcode.cn/problems/maximum-subarray/
 */

function maxSubArray(nums: number[]): number {
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER; // 初始化为最小数
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(sum > max){ // 更新最大值
            max = sum;
        }
        if(sum <= 0){ // 当前子数组和为负，对求最大子数组没有好处
            sum = 0; // 重新开始累加
        }
    }
    return max;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))