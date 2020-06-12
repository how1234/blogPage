# CSS面试题

## CSS布局问题
### 盒模型宽度的计算

```html
<style>
#div1{
	width:100px,
	padding:10px;
	border:1px solid #ccc
}
<style>
<div id="div1">

</div>
```
上面的代码中，div1的offsetWidth是多大。
在标准盒模型中，offsetWidth等于(width+padding+border)，所以上面的答案是122px。

怪异盒模型和标准盒模型的主要差异在于width的计算，在怪异盒模型中，width等于content width+padding+border。而在标准盒模型中，width等于content width。

如果想要将上面的盒子的offsetWidth变成100px，只需要添加`box-sizing:border-box即可`

### margin 纵向重叠过程

```html
<style>
    p{
        font-size:16px;
        line-height:1;
        margin-top:10px;
        margin-bottom: 15px;
    }

</style>
<body>
    <!--AAA和BBB中间的距离是多少-->
    <p>AAA</p>
    <p></p>
    <p></p>
    <p></p>
    <p>BBB</p>
</body>

```
相邻元素中的margin-top和margin-bottom会重叠，
空白内容的<p></p>也会重叠，所以答案是15px。

### margin 负值问题
如果margin-top和margin-left为负值，元素向上、向左移动。
如果margin-right为负值，该元素的右侧元素左移，自身不受影响。
如果margin-bottom为负值，该元素的下方元素上移，自身不受影响


### 什么是BFC，如何应用
BFC(block format context), 块级格式化上下文，它是一块独立渲染的区域，内部元素的渲染不会影响边界以外的元素。

形成BFC的条件：

* float的值不为none。
* position的值为absolute或者fixed。
* overflow的值不为visible。
* display的值为flex或者inline-block。

应用：

* 清除浮动


### 如何实现圣杯布局和双飞翼布局

这两个布局的主要特点有

* 三栏布局，中间一栏最先加载和渲染。
* 两侧内容固定，中间内容随着宽度自适应。
* 一般用于PC端网页。

实现方法：

* 使用float布局
* 两侧使用margin负值，以便和中间内容横向重叠。
* 防止中间内容被两侧覆盖，圣杯使用padding为两边留白，双飞翼使用margin。



### 手写clearfix
```html
.clearfix:after{
            display: block;
            content:'';
            clear:both
        }
```

## CSS定位问题

### absolute和relative是怎么定位的


### 居中对齐问题	