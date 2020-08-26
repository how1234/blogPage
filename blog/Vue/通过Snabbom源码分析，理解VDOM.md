# 阅读Snabbom源码，理解VDOM

[Snabbom](https://github.com/snabbdom/snabbdom)可以视作为一个简洁版的VDOM实现的一个库，通过对Snabbom源码的分析和学习，可以了解VDOM的一个实现逻辑。


## 使用方式

首先我们来看官方提供的一段示例代码。

```javascript
var patch = init([ // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
])

var container = document.getElementById('container')
//vnode可以由多个vnode组成，类似于真实DOM结构里的嵌套关系
var vnode = h('div#container.two.classes', { on: { click: someFn } }, [
  h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
  ' and this is just normal text',
  h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
])
// 渲染函数，这里会产生操作DOM的一个副作用
patch(container, vnode)

var newVnode = h('div#container.two.classes', { on: { click: anotherEventHandler } }, [
  h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
  ' and this is still just normal text',
  h('a', { props: { href: '/bar' } }, 'I\'ll take you places!')
])
// 第二次触发渲染函数
patch(vnode, newVnode) // Snabbdom efficiently updates the old view to the new state
```

上面代码描述的是一个VDOM初次加载以及第二次加载的实现过程。里面有几个关键的变量/函数， `container`是挂载在真实DOM上面的一个节点。`vnode`是`h`函数返回的一个VNode对象（参数为描述DOM的一个JS对象，里面有`classModule`,`propsModule`,`styleModule`和`eventListenersModule`），然后`patch(container,vnode)`，这里触发了VDOM的第一次渲染。 `newVnode`和`vnode`一样，也是由`h`函数返回的一个Vnode对象，`patch(vnode,newVnode)`触发了新老节点对比以及页面渲染。

## 代码分析


### VNode

首先分析一下VNode的类型。

```
//vnode.ts
import { Hooks } from './hooks'
import { AttachData } from './helpers/attachto'
import { VNodeStyle } from './modules/style'
import { On } from './modules/eventlisteners'
import { Attrs } from './modules/attributes'
import { Classes } from './modules/class'
import { Props } from './modules/props'
import { Dataset } from './modules/dataset'
import { Hero } from './modules/hero'

export type Key = string | number

export interface VNode {
  sel: string | undefined
  data: VNodeData | undefined	
  children: Array<VNode | string> | undefined
  elm: Node | undefined
  text: string | undefined
  key: Key | undefined
}


export interface VNodeData {
//问号表示可选值
  props?: Props
  attrs?: Attrs
  class?: Classes
  style?: VNodeStyle
  dataset?: Dataset
  on?: On
  hero?: Hero
  attachData?: AttachData
  hook?: Hooks
  key?: Key
  ns?: string // for SVGs
  fn?: () => VNode // for thunks
  args?: any[] // for thunks
  [key: string]: any // for any other 3rd party module
}

export function vnode (sel: string | undefined,
  data: any | undefined,
  children: Array<VNode | string> | undefined,
  text: string | undefined,
  elm: Element | Text | undefined): VNode {
  const key = data === undefined ? undefined : data.key
  return { sel, data, children, text, elm, key }
}
```
在TypeScript中，`interface`接口的意义是对结构进行类型检查。而问号`?`代表值是可选值。` sel: string | undefined`的意思是`Vnode`这个结构必须含有`sel`这个属性，且这个属性的值类型必须是`string`或者`undefined`类型。

最后一行代码的意思是，如果你传入的节点带有`VNodeData`类型的`data`，会将`data`上的`key`作为key值，如果传入的对象类型含有不为空值的`data`（比如`<h1>Hello world</h1>`这样的节点)，它的key值为undefined。最后返回一个`VNode`类型的对象` { sel, data, children, text, elm, key }`



### h函数

```
//h.ts
export function h (sel: string): VNode
export function h (sel: string, data: VNodeData | null): VNode
export function h (sel: string, children: VNodeChildren): VNode
export function h (sel: string, data: VNodeData | null, children: VNodeChildren): VNode
export function h (sel: any, b?: any, c?: any): VNode {
  var data: VNodeData = {}
  var children: any
  var text: any
  var i: number
  if (c !== undefined) {
    if (b !== null) {
      data = b
    }
    if (is.array(c)) {
      children = c
    } else if (is.primitive(c)) {
      text = c
    } else if (c && c.sel) {
      children = [c]
    }
  } else if (b !== undefined && b !== null) {
    if (is.array(b)) {
      children = b
    } else if (is.primitive(b)) {
      text = b
    } else if (b && b.sel) {
      children = [b]
    } else { data = b }
  }
  if (children !== undefined) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = vnode(undefined, undefined, undefined, children[i], undefined)
    }
  }
  if (
    sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
    (sel.length === 3 || sel[3] === '.' || sel[3] === '#')
  ) {
  //为了使vnode支持SVG，特别添加该函数对包含svg的vnode中的data加入了svg特有的namespace（命名空间）属性
    addNS(data, children, sel)
  }
  //返回vnode
  return vnode(sel, data, children, text, undefined)
};


```

前面4个函数构成了h函数的重载函数列表，这样是为了进行类型检查，主体逻辑在最后一个函数。
里面做了条件判断，大约是对传入的数据做了一个处理，里面的具体逻辑可以参考这篇[文章](https://www.dazhuanlan.com/2020/02/09/5e400fdb931b9/)
这里最后调用了之前我们说的`vnode`函数, 返回了一个我们上面定义的`VNode`类型的对象。


### patch函数

```javascript
//init.ts

  return function patch (oldVnode: VNode | Element, vnode: VNode): VNode {
    let i: number, elm: Node, parent: Node
    const insertedVnodeQueue: VNodeQueue = []
    
    //调用全局(cbs)里面的pre hook函数(pre)
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]()
	
   //如果第一个参数不是vnode（类型是Element)
    if (!isVnode(oldVnode)) {
    	//创造一个空的vnode，这个element元素
      oldVnode = emptyNodeAt(oldVnode)
    }
	
   //key和sel相同的的vnode
    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue)
    } else {
     //不同的vnode
      elm = oldVnode.elm!
      parent = api.parentNode(elm) as Node
	
	//递归生成插入点的新vnode子树
      createElm(vnode, insertedVnodeQueue)
	
	//如果父节点不为空，直接插入原来的位置。
      if (parent !== null) {
        api.insertBefore(parent, vnode.elm!, api.nextSibling(elm))
        //移除旧节点，为了进行参数适配，所以oldVnode使用[]包裹
        removeVnodes(parent, [oldVnode], 0, 0)
      }
    }
	
    //触发vnode的instert hook函数
    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data!.hook!.insert!(insertedVnodeQueue[i])
    }
    //调用post hook函数
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]()
    return vnode
  }
}

 function emptyNodeAt (elm: Element) {
    const id = elm.id ? '#' + elm.id : ''
    const c = elm.className ? '.' + elm.className.split(' ').join('.') : ''
   //vnode的参数是 (sel,data,children,text,elm)，这里面空节点的elm是DOM元素本身
    return vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm)
  }
  
  //判断vnode节点是否相同
  function sameVnode (vnode1: VNode, vnode2: VNode): boolean {
  //直接比较key和selector
  //当两个vnode都没有key的时候，undefined === undefined
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel
}

```

上面的主要逻辑为，当新老节点的`key`或者`sel`有任一不同时，就视作不同节点，直接把老的节点删除，重建新节点。 如果新老节点的`key`值和`sel`相同时，执行`patchVnode()`函数。


### patchVnode函数

```javascript
  function patchVnode (oldVnode: VNode, vnode: VNode, insertedVnodeQueue: VNodeQueue) {
   //触发prepatch hook函数	 
    const hook = vnode.data?.hook
    hook?.prepatch?.(oldVnode, vnode)
    
    //复用老节点的elm属性
    const elm = vnode.elm = oldVnode.elm!
   //新老节点的children属性
    const oldCh = oldVnode.children as VNode[]
    const ch = vnode.children as VNode[]
    //如果完全相等，返回
    
    if (oldVnode === vnode) return
    //触发update hook函数
    if (vnode.data !== undefined) {
      for (let i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
      vnode.data.hook?.update?.(oldVnode, vnode)
    }
    //如果vnode.text的值为空，那么一般vnode.children就不为空
    if (isUndef(vnode.text)) {
    //新旧节点都有children
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)
      } else if (isDef(ch)) {
      //新节点有children，旧节点无children
      	//如果旧节点有text，直接清空
        if (isDef(oldVnode.text)) api.setTextContent(elm, '')
        //添加新的children节点到elm上
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
      } else if (isDef(oldCh)) {
      //移除children
        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, '')
      }
      //如果节点的text不为空，且旧节点和新节点的text不一样
    } else if (oldVnode.text !== vnode.text) {
    //移除旧节点
      if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
      }
      //给新节点设置新的text
      api.setTextContent(elm, vnode.text!)
    }
    hook?.postpatch?.(oldVnode, vnode)
  }

```
`patchVnode()`是关键函数，当新老节点的`sel`和`key`相同时会执行。
这个函数里面遇见一些分支基本上就是根据有无text，有无children来进行一个简单的判断，当双方都有子节点，并且子节点不相同，就执行`updateChildren(elm, oldCh, ch, insertedVnodeQueue)`，这个函数。


## updateChildren()函数

这里就是关键函数，执行了diff算法	

```
function updateChildren (parentElm: Node,
    oldCh: VNode[],
    newCh: VNode[],
    insertedVnodeQueue: VNodeQueue) {
    let oldStartIdx = 0
    let newStartIdx = 0
    let oldEndIdx = oldCh.length - 1
    let oldStartVnode = oldCh[0]
    let oldEndVnode = oldCh[oldEndIdx]
    let newEndIdx = newCh.length - 1
    let newStartVnode = newCh[0]
    let newEndVnode = newCh[newEndIdx]
    let oldKeyToIdx: KeyToIndexMap | undefined
    let idxInOld: number
    let elmToMove: VNode
    let before: any
    //双指针遍历数组
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      //如果首部指针指向的children节点为空，指针向尾部移动
      if (oldStartVnode == null) {
        oldStartVnode = oldCh[++oldStartIdx] // Vnode might have been moved left
      } else if (oldEndVnode == null) {
        //如果尾部指针指向的children节点为空，指针向尾部移动
        oldEndVnode = oldCh[--oldEndIdx]
      } else if (newStartVnode == null) {
        newStartVnode = newCh[++newStartIdx]
      } else if (newEndVnode == null) {
        newEndVnode = newCh[--newEndIdx]
        //当新children数组首部指针所指向的节点和旧children数组首部指针指向的节点相同时。
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        //执行patchVnode函数
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
        
        //尾首相同
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
        //首尾相同
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
        api.insertBefore(parentElm, oldStartVnode.elm!, api.nextSibling(oldEndVnode.elm!))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
        // 尾首相同
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
        api.insertBefore(parentElm, oldEndVnode.elm!, oldStartVnode.elm!)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
        //如果四种情况都不遇见（首尾，首首，尾首，尾尾）
      } else {
      //oldKeyToIdx是一个map，键值对为(key,index)
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        }
        //通过新节点key得到该点在该旧数组中的index
        idxInOld = oldKeyToIdx[newStartVnode.key as string]
      
        //如果旧数组没有这个节点
        if (isUndef(idxInOld)) { // New element
        //直接重建节点
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)
        } else {
        //如果旧数组有这个节点
          elmToMove = oldCh[idxInOld]
          //但是selector不同，不满足sameNode的判断，直接重建。
          if (elmToMove.sel !== newStartVnode.sel) {
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)
          } else {
          //执行patchVnode
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
            //删除老children数组中该值
            oldCh[idxInOld] = undefined as any
            api.insertBefore(parentElm, elmToMove.elm!, oldStartVnode.elm!)
          }
        }
        //移动指针
        newStartVnode = newCh[++newStartIdx]
      }
    }
    //判断还有没有没遍历到的数组
    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
    	//如果旧数组遍历完毕(newStartIdx <= newEndIdx)
      if (oldStartIdx > oldEndIdx) {
        //将新数组的节点全部添加到parentElement上去。
        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
      } else {
       //如果新数组遍历完毕而旧数组没有(newStartIdx > newEndIdx)，就把旧数组剩下的Vnode全部移除
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
      }
    }
  }
```


可以看出Snabbom里面的算法主要以新节点的索引为主，对新老节点的数组进行一一比较。最终目的是找到相同节点并且进行复用。
有四种情况，如果四种情况都不满足，直接通过Map数据结构来寻找新节点在旧节点队列里面的位置，再配合`sel`值进行判断。最后再循环没遍历的节点，如果节点为新，直接添加到父节点上，如果节点为旧，直接删除。 这里的时间复杂度是`O(n)`，n为children列表长度。传入新节点时，最差一遍也能找到相同的节点。
在diff算法中，对于一个新节点只有两个条件分支:
1. 找到相同的旧节点(`sel`和`key`相同），使用`patchVnode()`函数进行更新。
2. 找不到相同的旧节点，直接重建

所以总的来说这是一个递归函数，对于有children的新老节点，进入updateChidren()函数进行节点对比，找到相同节点之后又进入`patchVnode()`函数进行判断，当新老节点都为叶子结点(没有children）时进行更新。

现在我们可以回看之前的官方示例了。

```javascript
var patch = init([ // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
])

var container = document.getElementById('container')
//vnode可以由多个vnode组成，类似于真实DOM结构里的嵌套关系
var vnode = h('div#container.two.classes', { on: { click: someFn } }, [
  h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
  ' and this is just normal text',
  h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
])

patch(container, vnode)

var newVnode = h('div#container.two.classes', { on: { click: anotherEventHandler } }, [
  h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
  ' and this is still just normal text',
  h('a', { props: { href: '/bar' } }, 'I\'ll take you places!')
])
// 第二次触发渲染函数
patch(vnode, newVnode) // Snabbdom efficiently updates the old view to the new state
```
当两个节点的`key`和`sel`相同时，我们称它们为相同节点
在第二次触发函数时，`patch`函数会进行一次判断，并且出发如果新老节点不同，直接在父节点上删除旧节点，插入新节点，如果节点相同则进入`patchVnode()`，在`patchVnode()`中，如果这个节点是叶子结点(`children`属性为空)，直接更新，如果不为叶子结点(`children`属性不为空）且判断逻辑比较复杂，递归进入`updateChildren()`，在`updateChildren()`中使用diff算法尽量复用老节点，找到相同的新老节点再进入`patchVnode()`进行节点更新。

我们经常会说算法复杂度从`O(n^3)`下降到了`O(n)`，这里`O(n^3)`实际上是树的最小距离编辑算法，使用最优解法（动态规划）的时候，复杂度为`(O(n^2m(1+logmn)))`，我们假设m和n同阶，则复杂度为`O(n^3)`，可以参考这份[代码](https://github.com/DatabaseGroup/tree-similarity/tree/develop)

