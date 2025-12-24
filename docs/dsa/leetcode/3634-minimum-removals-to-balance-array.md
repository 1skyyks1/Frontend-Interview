# 3634. 使数组平衡的最少移除数目

> 题目链接：<https://leetcode.cn/problems/minimum-removals-to-balance-array/>

## 代码

<<< @/code/dsa/leetcode/3634-minimum-removals-to-balance-array.ts

## 思路

- 先对数组排序，使得相同或相近的数集中。
- 用双指针维护一个窗口 `[left, i]`，要求窗口内的最大值 `nums[i]` 满足 `nums[i] <= k * nums[left]`。
- 对每个 `i`，不断右移 `left` 直到满足条件，此时窗口长度 `i - left + 1` 为当前“可保留”子数组的最大长度。
- 用 `res` 记录能保留的最长长度，最终答案为 `len - res`，即最少移除元素数目。
- 时间复杂度 $O(n \log n)$（排序），空间复杂度 $O(1)$（不计排序开销）。