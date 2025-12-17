# 238. 除自身以外数组的乘积

> 题目链接：<https://leetcode.cn/problems/product-of-array-except-self/>

## 代码

<<< @/code/dsa/leetcode/238-product-of-array-except-self.ts

## 思路

### 方法一：前后缀积数组

分别计算每个位置的前缀积和后缀积，然后相乘得到结果。

- **前缀积**：`prefix[i]` 表示 `nums[0] * nums[1] * ... * nums[i-1]`
- **后缀积**：`suffix[i]` 表示 `nums[i+1] * nums[i+2] * ... * nums[n-1]`
- **结果**：`res[i] = prefix[i] * suffix[i]`

- 时间复杂度 $O(n)$
- 空间复杂度 $O(n)$

### 方法二：O(1) 空间优化（推荐）

优化思路：复用返回数组 `res` 存储前缀积，用一个变量 `suffix` 动态计算后缀积。

1. 第一遍遍历：计算前缀积，直接存储在 `res` 中
2. 第二遍遍历：从后往前，用 `suffix` 变量累乘后缀，同时更新 `res[i]`

- 时间复杂度 $O(n)$
- 空间复杂度 $O(1)$（不考虑返回数组的空间）

**关键点**：先计算最后一个元素的结果，然后从 `len-2` 开始倒序遍历，这样可以在计算后缀积的同时更新结果数组。
