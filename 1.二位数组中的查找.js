/* 在一个二维数组中（每个一维数组的长度相同），
每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
7,
[[1,2,8,9],
[2,4,9,12],
[4,7,10,13],
[6,8,11,15]]
 */

 /* 
    利用二分查找思想,不断的跟右上角的值进行比较
    如果比右上角的值大行数加1
    如果比右上角的值小列数减1
    最后没有找到直接返回false
 */
function Find (target, arr) {
  let i = arr[0].length - 1, j = 0;
  if (arr == null || arr[0] == null) {
    return false;
  }
  while (i >= 0 && j < arr.length) {
    if (arr[j][i] < target) {
      j++;
    } else if (arr[j][i] > target) {
      i--;
    } else {
      return arr[j][i];
    }
  }
  return false;
}
const flag = Find(1, [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]])
console.log(flag)
