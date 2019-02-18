export default {
  /**
    格式化时间
    @param {number} time  时间戳 或者一个日期对象 自动格式化时间
    @param {boolean} temp 为true 返回年月日带时间 false只返回年月日
  */
  timeFormat (time, temp = true) {
    let t = typeof time === 'number' && time.toString().length === 10 ? time.toString() * 1000 : time.valueOf()
    let date = new Date(t)
    let year = date.getFullYear(time)
    let month = date.getMonth(time) + 1 <= 9 ? '0' + date.getMonth(time) : date.getMonth(time)
    let day = date.getDate(time) <= 9 ? '0' + date.getDate(time) : date.getDate(time)
    let hour = date.getHours(time) <= 9 ? '0' + date.getHours(time) : date.getHours(time)
    let minute = date.getMinutes(time) <= 9 ? '0' + date.getMinutes(time) : date.getMinutes(time)
    let seconds = date.getSeconds(time) <= 9 ? '0' + date.getSeconds(time) : date.getSeconds(time)
    return temp ? year + '-' + month + '-' + day + '　'  + hour + ':' + minute + ':' + seconds : year + '-' + month + '-' + day
  }
}