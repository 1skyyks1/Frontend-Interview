# 实现 throttle（节流）

> 功能：在一定时间间隔内多次触发，只会真正执行一次函数调用。

## 思路

- 使用闭包保存上一次执行时间 `lastTime`；
- 返回一个新的函数，每次触发时：
  - 获取当前时间 `now`；
  - 如果 `now - lastTime >= delay`，说明距离上次执行已经超过设定的间隔：
    - 调用原始函数 `func.apply(this, args)`；
    - 更新 `lastTime = now`；
- 这种实现是「时间戳版」节流：第一次触发会立刻执行。

## 代码

<<< @/code/impls/throttle.js
