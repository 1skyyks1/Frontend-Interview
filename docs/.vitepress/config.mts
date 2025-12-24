import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Frontend Interview",
  description: "前端算法 · 手撕 · 八股文",
  base: '/frontend-interview/',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  markdown: {
    math: true
  },
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '算法', link: '/dsa/', activeMatch: '/dsa/' },
      { text: '手撕', link: '/impls/', activeMatch: '/impls/' },
      { text: '八股文', link: '/interview/', activeMatch: '/interview/' }
    ],

    sidebar: {
      '/dsa/': [
        {
          text: '开始',
          items: [
            { text: '总览', link: '/dsa/' }
          ]
        },
        {
          text: 'LeetCode',
          collapsed: false,
          items: [
            { text: '3. 无重复字符的最长子串', link: '/dsa/leetcode/3-longest-substring-without-repeating-characters' },
            { text: '41. 缺失的第一个正数', link: '/dsa/leetcode/41-first-missing-positive' },
            { text: '53. 最大子数组和', link: '/dsa/leetcode/53-maximum-subarray' },
            { text: '56. 合并区间', link: '/dsa/leetcode/56-merge-intervals' },
            { text: '76. 最小覆盖子串', link: '/dsa/leetcode/76-minimum-window-substring' },
            { text: '189. 轮转数组', link: '/dsa/leetcode/189-rotate-array' },
            { text: '238. 除自身以外数组的乘积', link: '/dsa/leetcode/238-product-of-array-except-self' },
            { text: '239. 滑动窗口最大值', link: '/dsa/leetcode/239-sliding-window-maximum' },
            { text: '643. 子数组最大平均数 I', link: '/dsa/leetcode/643-maximum-average-subarray-i' },
            { text: '1343. 大小为 K 且平均值大于等于阈值的子数组数目', link: '/dsa/leetcode/1343-number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold' },
            { text: '1423. 可获得的最大点数', link: '/dsa/leetcode/1423-maximum-points-you-can-obtain-from-cards' },
            { text: '1456. 定长子串中元音的最大数目', link: '/dsa/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length' },
            { text: '1493. 删掉一个元素以后全为 1 的最长子数组', link: '/dsa/leetcode/1493-longest-subarray-of-1s-after-deleting-one-element' },
            { text: '2090. 半径为 k 的子数组平均值', link: '/dsa/leetcode/2090-k-radius-subarray-averages' },
            { text: '2379. 得到 K 个黑块的最少涂色次数', link: '/dsa/leetcode/2379-minimum-recolors-to-get-k-consecutive-black-blocks' },
            { text: '2841. 几乎唯一子数组的最大和', link: '/dsa/leetcode/2841-maximum-sum-of-almost-unique-subarray' },
            { text: '3090. 每个字符最多出现两次的最长子字符串', link: '/dsa/leetcode/3090-maximum-length-substring-with-two-occurrences' },
            { text: '3634. 使数组平衡的最少移除数目', link: '/dsa/leetcode/3634-minimum-removals-to-balance-array' }
          ]
        },
        {
          text: '常考/热点题',
          collapsed: false,
          items: [

          ]
        }
      ],

      '/impls/': [
        {
          text: '手撕实现',
          items: [
            { text: '总览', link: '/impls/' },
            { text: 'Promise.all', link: '/impls/promise-all' },
            { text: 'Throttle 节流', link: '/impls/throttle' }
          ]
        }
      ],

      '/interview/': [
        {
          text: '八股文',
          items: [
            { text: '总览', link: '/interview/' },
            { text: 'JavaScript', link: '/interview/js' },
            { text: 'ES6', link: '/interview/es6' },
            { text: 'CSS', link: '/interview/css' },
            { text: 'Vue', link: '/interview/vue' },
            { text: '计网', link: '/interview/network' },
            { text: 'Webpack', link: '/interview/webpack' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1skyyks1/FE-Algorithm-Interview' }
    ],

    search: {
      provider: 'local'
    }
  }
})