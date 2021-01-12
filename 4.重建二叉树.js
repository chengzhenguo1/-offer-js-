/* 
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列
{1,2,4,7,3,5,6,8}
中序遍历序列
{4,7,2,1,5,3,8,6}
则重建二叉树并返回。 
*/

/* 
  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/* 
二叉树的前序遍历的第一节点就是根节点
根据前序的根节点对中序节点进行分割就是树的左右子节点
然后不断进行递归构造树即可 
*/


function reConstructBinaryTree (pre, vin) {
  if (pre.length == 0) {
    return null;
  }
  if (pre.length == 1) {
    return new TreeNode(pre[0]);
  }
  //根节点
  let root = pre[0];

  let index = vin.indexOf(root);

  let pLeft = pre.slice(1, index + 1);
  let pRight = pre.slice(index + 1);

  let vLeft = vin.slice(0, index);
  let vRight = vin.slice(index + 1);
  let node = new TreeNode(root);
  node.left = reConstructBinaryTree(pLeft, vLeft);
  node.right = reConstructBinaryTree(pRight, vRight);
  return node;
}