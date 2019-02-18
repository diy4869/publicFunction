export default function throttle(fn, delay) {
  let start = Date.now()
  let time, now
  return function () {
    // now 为执行的时间
    now = Date.now()
    // 如果执行的时间 - 最开始的时间 大于设置的延时
    if ((now - start) >= delay) {
      clearTimeout(time)
      time = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
      // 重置之前的时间
      start = Date.now()
    }
  }
}