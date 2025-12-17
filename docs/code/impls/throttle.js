/**
 * throttle 节流：一定时间内重复触发只执行一次
 * @param {function} func
 * @param {number} delay
 */

function throttle(func, delay) {
    let lastTime = 0;
    return function(...args) {
        let now = Date.now();
        // 第一次触发，或距离上次触发已经超过一定时间
        if (now - lastTime >= delay) {
            func.apply(this, args);
            lastTime = now;
        }
    }
}

// 创建节流函数 2000ms
const throttled = throttle(() => console.log("触发时间:", Date.now()), 2000);

// 模拟高频触发 100ms
setInterval(() => {
    throttled();
}, 100);