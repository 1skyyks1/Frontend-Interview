/**
 * 76. 最小覆盖子串
 * https://leetcode.cn/problems/minimum-window-substring/
 */

function minWindow(s: string, t: string): string {
    // 维护s滑动窗口现有字符及数量，t的字符及数量，a-z 0-25 / A-Z 26-51
    const sArr = new Array(52).fill(0), tArr = new Array(52).fill(0);
    const len = s.length;
    let cnt = 0; // 还需要匹配的字符种类数
    let res = '';
    // 初始化tArr
    for (const x of t) {
        const index = getIdx(x);
        tArr[index]++;
        if (tArr[index] === 1) cnt++;
    }
    for (let i = 0, j = 0; i < len; i++) {
        const right = getIdx(s[i]);
        sArr[right]++;
        if (sArr[right] === tArr[right]) cnt--; // 当前字符达到所需数量
        while (j < i) {
            const left = getIdx(s[j]);
            // 当前字符多了，移动左指针
            if (sArr[left] > tArr[left]) {
                sArr[left]--;
                j++;
            }
            else break;
        }
        // 已全部匹配，是第一次匹配或比之前的匹配窗口更短
        if (cnt === 0 && (!res || res.length > i - j + 1)){
            res = s.substring(j, i + 1);
        }
    }
    return res;
}

// 传入单字符，返回索引
function getIdx(x: string): number {
    return x >= 'A' && x <= 'Z' // 判断大小写
        ? x.charCodeAt(0) - 'A'.charCodeAt(0) + 26
        : x.charCodeAt(0) - 'a'.charCodeAt(0);
}