import Toast from './Toast'

const obj = {}

// 如果在 vue 中时使用了 use 方法的话，他会调用插件内部的 install 方法, 并且参数是 vue 这个对象

obj.install = function (Vue) {
  // 1. 创建组件构造器
  const toastConstructor = Vue.extend(Toast)    // 根据组件创造构造器

  // 2. 根据构造器创建 组件对象 (使用 new 方法)
  const toast = new toastConstructor()          // 根据构造器创建出 vue 组件

  // 3. 将组件对象挂在到元素上
  toast.$mount(document.createElement('div'))   // 将 创造的 组件挂载（通过）到 原生的标签内  <div>组件</div>

  // 4. toast.$el 就是对应的 div 
  document.body.appendChild(toast.$el)          // 将 组件 添加到 body 中就行了

  // 5. 将新创建的组件对象添加到 vue 的原型当中， 使得组件可以直接使用
  Vue.prototype.$toast = toast
}


export default obj                              // 将 obj 导出， 以便能够使用 obj的install 方法
