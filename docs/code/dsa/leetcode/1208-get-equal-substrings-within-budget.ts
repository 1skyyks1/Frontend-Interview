/**
 * 1208. 尽可能使字符串相等
 * https://leetcode.cn/problems/get-equal-substrings-within-budget/
 */

function equalSubstring(s: string, t: string, maxCost: number): number {
    let res = 0;
    let left = 0;
    let cost = 0;
    for (let i = 0; i < s.length; i++) {
        cost += Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
        while (cost > maxCost) {
            cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }
        res = Math.max(res, i - left + 1);
    }
    return res;
}