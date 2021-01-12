// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
// 队列先进先出
// 栈先进后出
let stack1 = []
let stack2 = []
function push (node) {
  stack1.push(node)
}
function pop () {
  if (stack2.length <= 0) {
    while (stack1.length !== 0) {
      stack2.push(stack1.pop())
    }
  }
  return stack2.pop()
}
push(1)
push(2)
console.log(pop())
console.log(pop())