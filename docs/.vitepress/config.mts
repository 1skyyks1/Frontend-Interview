import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Frontend Interview",
  description: "前端算法 · 手撕 · 八股文",
  base: '/frontend-interview/',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],

  themeConfig: {
    logo: '/logo.svg',
    markdown: {
      math: true
    },
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
            { text: '53. 最大子数组和', link: '/dsa/leetcode/53-maximum-subarray' },
            { text: '56. 合并区间', link: '/dsa/leetcode/56-merge-intervals' },
            { text: '76. 最小覆盖子串', link: '/dsa/leetcode/76-minimum-window-substring' },
            { text: '189. 轮转数组', link: '/dsa/leetcode/189-rotate-array' },
            { text: '238. 除自身以外数组的乘积', link: '/dsa/leetcode/238-product-of-array-except-self' },
            { text: '239. 滑动窗口最大值', link: '/dsa/leetcode/239-sliding-window-maximum' }
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
            { text: 'JS', link: '/interview/js' },
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

    footer: {
      copyright: 'Copyright © 2025-present yks1'
    },

    search: {
      provider: 'local'
    }
  }
})