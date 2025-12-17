/**
 * 238. 除自身以外数组的乘积
 * https://leetcode.cn/problems/product-of-array-except-self/
 */

// 前后缀积
function productExceptSelf(nums: number[]): number[] {
    const len = nums.length;
    const prefix: number[] = new Array(len);
    const suffix: number[] = new Array(len);
    prefix[0] = 1;
    suffix[len - 1] = 1;
    const res = [];

    // 前缀积
    for (let i = 1; i < len; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // 最后一个元素的结果先计算，后续遍历从len-2开始
    res[len - 1] = prefix[len - 1] * suffix[len - 1];

    // 前缀积
    for (let i = len - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
        res[i] = prefix[i] * suffix[i];
    }
    return res;
}

// 只算前缀积，后缀积由一个动态的数字存储，O(1)空间
function productExceptSelf2(nums: number[]): number[] {
    const len = nums.length;
    const res = [];
    res[0] = 1;

    // 直接复用返回数组算前缀积
    for (let i = 1; i < len; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    let suffix = 1;
    for (let i = len - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }
    return res;
}
