/**
 * Promise.all 完成并行任务，接收 promise 数组，返回一个 promise
 * 在所有输入的 Promise 都成功时才会 resolved，并返回一个包含所有结果的数组
 * 任何一个输入的 Promise 被拒绝，返回的 Promise 会立即被拒绝，并返回该拒绝的错误
 * 注意：Promise.all 输入输出顺序不会变
 * @param {iterator} promises
 */

Promise.myAll = function(promises) {
    return new Promise((res, rej) => {
        let count = 0;
        let fulfilled = 0;
        const result = [];
        for (const promise of promises) {
            const index = count;
            count++;
            // Promise.resolve() 用于将现有对象转为 Promise 对象，若已是 Promise 对象则原封不动返回
            Promise.resolve(promise).then((data) => {
                result[index] = data;
                fulfilled++;
                if (fulfilled === count) {
                    res(result);
                }
            }, rej);
        }
        if (count === 0) {
            res([]);
        }
    });
}