//在规定时间内未触发第二次 则执行
function debounce (fn, delay) {
    // 利用闭包保存定时器
    let timer = null
    return function () {
      let context = this
      clearTimeout(timer)
      timer = setTimeout(function () {
        fn.apply(context, [...arguments])
      }, delay)
    }
  }
  
