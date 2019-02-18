/**
 * 判断滚动条是否滚动到底部
 * @Function {Function} fn 滚动到底部需要执行的函数
 * 返回一个minHeight 距离底部的高度
 */
export default function isBottom (fn) {
  let height = document.documentElement.offsetHeight || document.body.clientHeight
  let scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop
  let minHeight = height - (scrollTop + window.innerHeight)
  if (height === scrollTop + window.innerHeight) {
    fn()
  }
  return minHeight
}