function _new(cstr, ...args) {
  const obj = new Object()
  // 继承原型
  obj.__proto__ = cstr.prototype
  // 继承属性
  const res = cstr.apply(obj, args)

  return typeof res === 'object' ? res : obj
}

function Person(name, age) {
  console.log('constructor')
  this.name = name
  this.age = age
  return this
}

const o = _new(Person, 'kk', 34)
console.log(o.name, o.age)
console.log(o instanceof Person)
