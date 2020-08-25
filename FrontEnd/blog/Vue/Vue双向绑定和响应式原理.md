#Vue 响应式实现

为了实现数据驱动视图这个目标，Vue需要监听数据，也就是说：组件data的数据一旦变化，就会立刻触发视图的更新。也就是MVVM的作用的根本思路。

##Vue 2.x 响应式

Vue 2.x响应式的实现所涉及到的及到一个核心API是[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)。


Vue官网的介绍：
>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。

`Object.defineProperty`里面可以设置属性的数据描述符例如`writeable`,`enumeralble`和`configurable`。 但是Vue主要利用的还是里面的`getter`和`setter`特性。

### 最基本的响应式监听

```
let obj = {};
let name = "zhangsan";
Object.defineProperty(obj, "name", {
  get() {
    console.log("get");
    return name;
  },
  set(newName) {
    console.log("set name");
    name = newName;
  }
});
obj.name; //get
obj.name = "lisi"; //set name
```

可以看到这里的`getter`和`setter`都是作用于`name`这个变量。

### 对象监听

在Vue官网里面提到的：
>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。

我们可以看出Vue对对象的监听实际上有两步:

1. 遍历一个对象的property
2. 使用Object.defineProperty把这些对象全部监听

下面是一个模拟实现：
1. `observe()`实现遍历一个对象的property
2. `defineReactive()`对对象的属性进行`getter`和`setter`的设置
3. `updateView()`模拟视图更新，用来判断是否成功实现监听。

```
//定义一个监听函数

function observe(obj) {
  if (typeof obj !== "object" || obj === null) {
    return;
  }
  for (let key in obj) {
    defineReactive(obj, key, obj[key]);
  }
}

//对属性设置getter和setter

function defineReactive(obj, target, val) {
  //深度监听，这里如果不是对象，会直接返回空值
  observe(val);

  Object.defineProperty(obj, target, {
    get() {
      return val;
    },
    set(newVal) {
    	//传入新值触发视图更新
      if (newVal !== val) {
        val = newVal;
        updateView();
      }
    }
  });
}

//视图更新函数
function updateView() {
  console.log("视图更新");
}

const data = {
  name: "zhangsan",
  age: 25,
  info: {
    address: "shanghai"
  }
};

observe(data);

data.name = "lisi";
data.info.address = "beijing";


```

Vue 2.x响应式监听有以下缺点：
1. 深度监听缺点性能开销比较大。
2. 无法监听新增和删除属性。(所以在Vue中，当你对一个data添加/删除属性时，必须使用Vue.set/Vue.get来进行操作）。


### 数组监听

Vue实现监听数组的方式主要是通过改变`Array`的原型，通过复制一个`Array`对象的原型并且重新实现	
所以Vue不能检测以下数组的变动：

>当你修改数组的长度时，例如：vm.items.length = newLength
>
>当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue

所以以下代码在上面对象监听的基础上，增添三个功能：
1. 复制一个Array的原型对象`VueArrProto`并且重写相关方法逻辑，比如push,pop,splice等。
2. 将原型对象赋予观察的数组。
3. `observe()`函数添加判断逻辑，当发现观察对象为数组时，将它的隐式原型`__proto__`指向新的改写后的原型对象`VueArrProto`

```
//复制一个Array的原型对象
let VueArrProto = Object.create(Array.prototype);

//重写相关方法
["push", "pop", "splice", "shift", "unshift"].forEach(method => {
  VueArrProto[method] = function() {
    updateView();
    Array.prototype[method].call(this, ...arguments);
  };
});

function observe(obj) {
  if (typeof obj !== "object" || obj === null) {
    return;
  }
  //如果是数组，改写原型对象
  if (Array.isArray(obj)) {
    obj.__proto__ = VueArrProto;
  }
  for (let key in obj) {
    defineReactive(obj, key, obj[key]);
  }
}

const nums = [];
observe(nums);
nums.push(4); //视图更新

```



## Vue 3.0 响应式
Vue 3.0启用为[Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)来实现响应式。

Proxy的基本语法：
`const p = new Proxy(target, handler)`
其中`target`为`Proxy`要包装的对象，类似于`Object.defineProperty`里的`target`，但是这里`Proxy`可以是任何类型的对象，可以是包括原生数组，函数，甚至另一个`Proxy`。`handler`是一个通常以函数作为属性的对象，各属性中的函数分别定义了操作`Proxy p`的会触发行为（包括但不仅限于于`getter`和`setter`)。

[Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

这里`Reflect`我理解为就是代替原来的`Object`对象，比如以前的：`name in obj`和`delete obj.a`，可以让`Reflect.has(name)`和`Reflect.deleteProperty(obj,'a')`替代。我觉得主要是有三个优点
1. 和`Proxy`方法一一对应。
2. 相比于以前`Object`对象上的方法，更加规范化和标准化
3. 替代掉`Object`对象上的工具函数

### 对象的响应式实现

```
const data = {a:'100',b:"200"}

const proxyData = new Proxy(data,{
  get(target,key,receiver){
    const result = Reflect.get(target,key,receiver) //当前属性上的值
    console.log(key) //属性名
    return result 
  },

  set(target,key,val,receiver){
   //重复数据不处理
    if(val === target[key]){
      return true
    }
    const result = Reflect.set(target,key,receiver) //是否设置成功(Boolean类型)
    console.log(`set : ${key}, newVal : ${val}`)
    return result 
  },
  deleteProperty(target,key){
    const result = Reflect.deleteProperty(target,key) //是否删除成功(Boolean类型)
    console.log(`delete property:${key}`)
    return result
  }
})
proxyData.a //a
proxyData.a = 100 //set : a, newVal : 100
delete proxyData.a //delete property:a
data.b //无输出
console.log(data) //{b:'200'}
```

要访问已经代理过的对象才会触发handler，但是删除代理对象上的属性也会影响到对象本身的属性。

### 数组的响应式实现

假如我们直接使用上面的代码，只是把`data`改成`[1,2,3]`，我们直接调用`push()`方法，也是可以实现响应式
```
proxyData.push(4) 
//push
//length
//set : 3, newVal : 4
```
但是这里输出了`push`这个在原型上的方法，所以我们为了不触发原型的方法，需要改写一下`get()`方法

```
 get(target,key,receiver){
    //当属性不在原型上时
    if(Reflect.ownKeys(target).includes(key)){
      console.log(`get ${key}`)
    }
    const result = Reflect.get(target,key,receiver) //当前属性上的值
    return result 
  }
```

这里已经解决了Vue 2.x数组监听的两个问题，改变数组下标以及直接改变length长度都可以监听。
### Vue的响应式实现
```
// 监听函数
function reactive(target = {}) {
   // 不是对象或数组，则返回
  if (typeof target !== 'object' || target == null) {
      return target
  }

  // 代理配置
  const proxyConf = {
      get(target, key, receiver) {
          // 只处理本身属性
          const ownKeys = Reflect.ownKeys(target)
          if (Reflect.ownKeys(target).includes(key)) {
              console.log('get', key) // 监听
          }
          const result = Reflect.get(target, key, receiver)
          // 深度监听
          return reactive(result)
      },
      set(target, key, val, receiver) {
          // 重复的数据，不处理
          if (val === target[key]) {
              return true
          }
  
          const ownKeys = Reflect.ownKeys(target)
          if (ownKeys.includes(key)) {
              console.log('已有的 key', key)
          } else {
              console.log('新增的 key', key)
          }

          const result = Reflect.set(target, key, val, receiver)
          console.log('set', key, val)
          return result // 是否设置成功
      },
      deleteProperty(target, key) {
          const result = Reflect.deleteProperty(target, key)
          console.log('delete property', key)
          return result // 是否删除成功
      }
  }

  const observed = new Proxy(target, proxyConf)
  return observed
}

// 测试数据
const data = {
  name: 'zhangsan',
  age: 25,
  info: {
      city: 'beijing',
      a: {
          b: {
              c: {
                  d: {
                      e: 100
                  }
              }
          }
      }
  }
}
const proxyData = reactive(data)
```

这里解决了Vue 2.x里面的两个痛点：
1. 深度监听的性能开销问题，在Proxy中，只有当你访问深层次的节点，它才会进行深层次访问，类似于懒加载，而不像Vue 2.x里面一进来就对整个对象进行递归遍历。
2. 可以有效解决新增属性和删除属性的监听问题。

Proxy的缺点在于兼容性不好，无法实现polyfill




