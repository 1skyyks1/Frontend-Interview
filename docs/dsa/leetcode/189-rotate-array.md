# 189. 轮转数组

> 题目链接：<https://leetcode.cn/problems/rotate-array/>

## 代码

<<< @/code/dsa/leetcode/189-rotate-array.ts

## 思路

### 方法一：pop + unshift（可能超时）

每次将数组最后一个元素弹出，然后插入到数组开头，重复 k 次。

- 时间复杂度 $O(n \times k)$，当 k 很大时可能超时
- 空间复杂度 $O(1)$

### 方法二：splice（推荐）

利用 `splice` 方法一次性完成操作：

1. 先对 k 取模，处理 k 大于数组长度的情况
2. 使用 `nums.splice(n - k)` 获取后 k 个元素
3. 使用 `nums.splice(0, 0, ...)` 将这些元素插入到数组开头

- 时间复杂度 $O(n)$
- 空间复杂度 $O(k)$（splice 会创建新数组）

**注意**：`splice(开始索引, 删除个数, 插入元素...)` 的用法，`splice(n - k)` 会返回后 k 个元素并删除它们，然后通过 `splice(0, 0, ...)` 插入到开头。
