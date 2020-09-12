// 放入一些公共的函数方法cs

// 防抖动函数
export function debounce (func, delay) {
  let timer = null
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}
