# 56. 合并区间

> 题目链接：<https://leetcode.cn/problems/merge-intervals/>

## 代码

<<< @/code/dsa/leetcode/56-merge-intervals.ts

## 思路

经典区间合并：

1. 先按区间起点从小到大排序；
2. 用结果数组 `res` 保存当前已经合并好的区间，始终维护最后一个区间 `last`；
3. 对每个新区间 `[start, end]`：
   - 如果 `last[1] >= start`，说明有重叠，更新 `last[1] = Math.max(last[1], end)`；
   - 否则说明没有重叠，直接把新区间加入结果。

- 时间复杂度 $O(n \log n)$，主要是排序的复杂度
- 空间复杂度 $O(n)$，需要存储结果数组，最坏情况下所有区间都不重叠
