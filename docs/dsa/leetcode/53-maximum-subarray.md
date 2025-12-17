# 53. 最大子数组和

> 题目链接：<https://leetcode.cn/problems/maximum-subarray/>

## 代码

<<< @/code/dsa/leetcode/53-maximum-subarray.ts

## 思路

使用**动态规划 / 前缀和贪心**的经典做法：用 `sum` 记录当前子数组和，`max` 记录历史最大子数组和。

- 每次把当前元素加到 `sum` 上；
- 若 `sum` 比 `max` 大，则更新 `max`；
- 如果 `sum` 小于等于 0，说明这段前缀对后续求最大和没有贡献，直接将 `sum` 置 0，从下一个位置重新开始。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。
