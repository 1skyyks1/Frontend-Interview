# 1208. 尽可能使字符串相等

> 题目链接：<https://leetcode.cn/problems/get-equal-substrings-within-budget/>

## 代码

<<< @/code/dsa/leetcode/1208-get-equal-substrings-within-budget.ts

## 思路

使用**滑动窗口**：

- 用 `cost` 记录当前窗口内将 `s` 转换为 `t` 的总成本（对应字符 ASCII 差值的绝对值之和）；
- 右指针向右移动，累加当前字符的转换成本；
- 当总成本超过 `maxCost` 时，移动左指针缩小窗口，从 `cost` 中减去左端字符的成本，直到总成本不超过 `maxCost`；
- 每次更新窗口长度的最大值。

时间复杂度 $O(n)$，空间复杂度 $O(1)$，其中 $n$ 为字符串长度。

