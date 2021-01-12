/* 
输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
{67,0,24,58}
[58,24,0,67]
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 利用堆栈的先进后出特性
function printListFromTailToHead (head) {
  let arr = [];
  while (head != null) {
    arr.unshift(head.val)
    head = head.next;
  }
  return arr;
}
//利用递归的方式,到最后一个再加入数组
let arr = [];
function printListFromTailToHead (head) {
  if (head != null) {
    printListFromTailToHead(head.next)
    arr.push(head.val)
  }
  return arr;
}
