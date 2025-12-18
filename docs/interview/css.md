# CSS

## 隐藏元素的方式

```css
/* 完全从文档流中移除，不占据任何空间 */
display: none;

/* 仍占据空间 */
visibility: hidden;

/* 仍占据空间，可触发绑定事件（如点击事件） */
opacity: 0;
```

```html
<!-- HTML5 hidden 属性，类似 display: none -->
<div hidden></div>
```

## 重排重绘，如何减少？


### 简单版

重排是指元素的几何属性发生改变，浏览器重新计算元素的几何属性（如位置、大小等），并重新构建页面布局的过程。例如：添加、删除 DOM 元素，修改元素的位置、尺寸、边距（width / height / padding / margin）等，修改浏览器窗口的大小（Resize），修改字体大小或内容。

重绘是指当元素的样式（如颜色、字体、背景等）发生改变时，浏览器需要重新渲染这些元素的过程。例如：修改 DOM 元素的样式，如颜色（color/background-color）等。注意：outline 不会导致重排(与 border 的区别)，修改文字大小会导致重排，修改字体可能会导致重排。

重排和重绘的触发条件是不同的，但重排一定会触发重绘。

### 复杂版

浏览器渲染页面的时候，解析 html 构建 DOM 树，包含的样式构建 CSSOM 树，结合起来构建渲染树（Render Tree，或称布局树）。

所有对布局树的更改和读取都会引发重排。更改是异步重排，如果有多次更改，会在下一次渲染时集中处理。读取是同步重排，否则会出现无法同步更改的问题。

```js
// 修改 DOM 树，布局树还没变
dom.style.width = '1000px';

// 如果不同步重排就会读取到旧数据（读取可以用于强制重排）
dom.clientWidth;
```

对非几何信息的读写所造成的可见样式变化会引发重绘。

如何减少重排重绘：避免频繁 DOM 操作（使用 DocumentFragment 将多次 DOM 操作合并为一次）、避免频繁操作样式（一次性改变style/增减class属性）

## absolute 和 relative 的区别？fixed 会脱离文档流吗？

```css
/* 仍占据文档流的位置，top/bottom/left/right 相对原始位置偏移。
   用于微调和作为 absolute 子元素的参考点 */
position: relative;

/* 脱离文档流，相对最近的已定位的父元素进行定位。
   通过 top/bottom/left/right 精确定位，实现精确布局 */
position: absolute;

/* 脱离文档流，相对浏览器视口定位，通过 top/bottom/left/right 精确定位。
   常用于实现固定位置的元素（导航栏、按钮） */
position: fixed;
```

## 垂直居中的方式

```css
/* 1. 使用 Flex */
.box {
    display: flex;
    align-item: center;
}

/* 2. 使用 Grid */
.box {
    display: grid;
    /* 相当于 align-items: center + justify-content: center */
    place-items: center; 
}

/* 3. absolute 定位 */
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    /* 如果已知子元素高宽，可以直接 margin-top + margin-left 它们的一半 */
    transform: translate(-50%, -50%); 
}

/* 4. vertical-align（只作用于表格和行内元素） */
.box {
    display: table-cell;
    vertical-align: middle;
}

/* 5. 文本和行内元素 line-height */
.box {
    height: 100px;
    /* 设置和 height 一样的值 */
    line-height: 100px;
}
```

## margin 负值怎么动？

```css
/* 负 margin 会导致元素内容向外移动，可能会使元素与其他元素重叠 */
.box {
    /* 向上移动 20px */
    margin-top: -20px;
}
```

## 盒模型，具体属性

CSS 的一个标准，每个元素都被视为一个矩形盒子，由内容（content）、内边距（padding）、边框（border）和外边距（margin）组成。

属性：content（`width` / `height`）、`padding`、`border`、`margin`

`box-sizing`: `content-box`（默认） | `border-box` | `inherit`

`content-box`: `width` / `height` 不包含 `padding` 和 `border`

`border-box`: `width` / `height` 包含 `padding` 和 `border`

`inherit`: 由父元素继承