---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Frontend Interview"
  text: "算法 · 手撕 · 八股文"
  tagline: Talk is cheap. Show me the code.
  image:
    src: public/logo.svg
    alt: Frontend Interview Logo
  actions:
    - theme: brand
      text: 算法刷题
      link: /dsa/
    - theme: alt
      text: 手撕实现
      link: /impls/
    - theme: alt
      text: 八股文
      link: /interview/

features:
  - title: "DSA算法"
    details: "LeetCode经典+前端面试高频题。涵盖栈、队列、链表、二叉树、动态规划等核心算法模式。"
    icon: 🧠
    link: /dsa

  - title: "手撕"
    details: "深入源码，手写 Promise、DeepClone、EventBus 及各类方法"
    icon: ✍️
    link: /impls

  - title: "八股文"
    details: "浏览器原理、计网、框架机制。拒绝死记硬背，用逻辑串联零散知识点。"
    icon: 📖
    link: /interview
---

