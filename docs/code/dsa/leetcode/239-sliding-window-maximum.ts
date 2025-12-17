/**
 * 239. 滑动窗口最大值
 * https://leetcode.cn/problems/sliding-window-maximum/
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue: number[] = []; // 单调递减，存储索引
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        // 若队列最右侧数小于等于新数则将其移出队列，保证单调递减
        while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop();
        }
        queue.push(i);
        // 目前最大数该出栈了
        if (i >= queue[0] + k) {
            queue.shift();
        }
        // 初始化第一个窗口后再记录最大值
        if (i >= k - 1) {
            res.push(nums[queue[0]]);
        }
    }
    return res;
}

// 测试
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));