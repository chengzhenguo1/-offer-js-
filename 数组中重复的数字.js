// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中第一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
// 返回描述：
// 如果数组中有重复的数字，函数返回true，否则返回false。
// 如果数组中有重复的数字，把重复的数字放到参数duplication[0]中。（ps:duplication已经初始化，可以直接赋值使用。）

// 利用set集合法
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let length = numbers.length;
    if(length <= 1) {
      return false;
    }
    let set = new Set();
    
    for(let i=0;i<length;i++){
      if(numbers[i]> length) return false;
      if(set.has(numbers[i])){
        duplication[0] = numbers[i];
        return true;
      }else {
        set.add(numbers[i]);
      }
    }
    return false;
}
//利用原数组法,把访问过的元素下标加长度为True
function duplicate (numbers, duplication) {
  // write code here
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  let len = numbers.length;
  for (let i = 0; i < len; i++) {
    if (numbers[i] > len || numbers[i] < 0) return false;
    if(numbers[numbers[i]+len]){
      duplication[0] = numbers[i];
      return true;
    }else {
      numbers[numbers[i]+len] = true;
    }
  }
  return false;
}
let arr = []
const flag = duplicate([6, 3, 2, 0, 2, 5, 0], arr)
console.log(flag, arr)