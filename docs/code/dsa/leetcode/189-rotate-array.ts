/**
 * 189. 轮转数组
 * https://leetcode.cn/problems/rotate-array/
 Do not return anything, modify nums in-place instead.
 */

// 可能超时
function rotate(nums: number[], k: number): void {
    const times = k % nums.length;
    for (let i = 1; i <= times; i++) {
        const num = nums.pop()!;
        nums.unshift(num);
    }
}

// 利用splice
function rotate2(nums: number[], k: number): void {
    const n = nums.length;
    k %= n;
    if (k === 0) return;
    // splice(开始操作的索引，要删除多少个，要插入的新元素)
    // nums.splice(n - k)为后k个元素
    nums.splice(0, 0, ...nums.splice(n - k));
}