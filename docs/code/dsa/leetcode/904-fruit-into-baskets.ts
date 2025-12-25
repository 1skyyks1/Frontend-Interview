/**
 * 904. 水果成篮
 * https://leetcode.cn/problems/fruit-into-baskets/
 */

function totalFruit(fruits: number[]): number {
    let res = 0;
    let left = 0;
    const map = new Map<number, number>();
    for (let i = 0; i < fruits.length; i++) {
        map.set(fruits[i], (map.get(fruits[i]) || 0) + 1);
        while (map.size > 2) {
            const fruit = map.get(fruits[left])!;
            fruit === 1 ? map.delete(fruits[left]) : map.set(fruits[left], fruit - 1);
            left++;
        }
        res = Math.max(res, i - left + 1);
    }
    return res;
}