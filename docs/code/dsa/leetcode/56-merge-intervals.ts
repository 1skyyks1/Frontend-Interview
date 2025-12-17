/**
 * 56. 合并区间
 * https://leetcode.cn/problems/merge-intervals/
 */

function merge(intervals: number[][]): number[][] {
    const res: number[][] = [];
    intervals.sort((i, j) => i[0] - j[0]);
    res.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const last = res[res.length - 1];
        if (last[1] >= start) {
            last[1] = Math.max(last[1], end);
        } else {
            res.push([start, end]);
        }
    }
    return res;
}