# 手写 Promise.all

> 功能：并行执行一组 Promise，**全部成功**才 `resolved`，任意一个失败则立刻 `rejected`，并且保证返回结果的顺序与输入顺序一致。

## 思路

- 遍历传入的可迭代对象 `promises`，为每一项包装 `Promise.resolve`：
  - 这样即使输入中有普通值，也会被转成已完成的 Promise；
- 使用 `result[index]` 按输入顺序存放每个 Promise 的结果；
- 用 `fulfilled` 记录已经成功的数量，当 `fulfilled === count` 时，整体 `resolve(result)`；
- 如果没有任何输入（`count === 0`），直接返回空数组。

## 代码

<<< @/code/impls/promise-all.js
