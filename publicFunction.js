class publicFunction {
  static filterQuery(args, query) {
    if (args instanceof Array) {
      args.push(query)
      let reg = /([\d+])/g;
      console.log(query + ''.match(reg))
    } else if (args instanceof Object) {
      let newObj = {}
      Object.entries(args).filter((item, index) => {
        if (item[0] !== query[index]) {
          newObj[item[0]] = item[1]
        }
        return newObj
      })
    }
  }
  
  /**
    格式化时间
    @param {number} time  时间戳 或者一个日期对象 自动格式化时间
    @param {boolean} temp 为true 返回年月日带时间 false只返回年月日
  */
  static timeFormat (time, temp = true) {
    let t = typeof time === 'number' && time.toString().length === 10 ? time.toString() * 1000 : time.valueOf()
    let date = new Date(t)
    let year = date.getFullYear(time)
    let month = date.getMonth(time) + 1
    let day = date.getDate(time)
    let hour = date.getHours(time) <= 9 ? '0' + date.getHours(time) : date.getHours(time)
    let minute = date.getMinutes(time) <= 9 ? '0' + date.getMinutes(time) : date.getMinutes(time)
    let seconds = date.getSeconds(time) <= 9 ? '0' + date.getSeconds(time) : date.getSeconds(time)
    return temp ? year + '-' + month + '-' + day + '　'  + hour + ':' + minute + ':' + seconds : year + '-' + month + '-' + day
  }
  static countDown (time, temp) {
    let currentTime = new Date().valueOf()
    let endTime = typeof time === 'number' && time.toString().length === 10 ? time.toString() * 1000 : time
    let timeDifference = endTime - currentTime >= 0 ? endTime - currentTime : currentTime - endTime
    if (timeDifference) {
      let timeObj = {
        year: ~~(timeDifference / 1000 / 60 / 60 / 24 / 365),
        month: ~~((timeDifference / 1000 / 60 / 60 / 24 / 31)),
        day: ~~(timeDifference / 1000 / 60 / 24 % 12),
        hour: ~~(timeDifference / 1000 / 60 / 60 % 24),
        minute: ~~(timeDifference / 1000 / 60 % 60),
        seconds:  ~~(timeDifference / 1000 % 60)
      }
      let year = timeObj.year <= 9 ? '0' + timeObj.year : timeObj.year
      let month = timeObj.month <= 9 ? '0' + timeObj.month : timeObj.month
      let day = timeObj.day <= 9 ? '0' + timeObj.day : timeObj.day
      let hour = timeObj.hour <= 9 ? '0' + timeObj.hour : timeObj.hour
      let minute = timeObj.minute <= 9 ? '0' + timeObj.minute : timeObj.minute
      let seconds = timeObj.seconds <= 9 ? '0' + timeObj.seconds : timeObj.seconds
      console.log(year + '-' + month + '-' + day + '　'  + hour + ':' + minute + ':' + seconds)
      return temp ? year + '-' + month + '-' + day + '　'  + hour + ':' + minute + ':' + seconds : hour + ':' + minute + ':' + seconds
    }
  }

  /**
   * 判断滚动条是否滚动到底部
   * @function {Function} fn 滚动到底部需要执行的函数
   * 返回一个minHeight 距离底部的高度
   */
  static isBottom (fn) {
    let height = document.documentElement.offsetHeight || document.body.clientHeight
    let scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop
    let minHeight = height - (scrollTop + window.innerHeight)
    if (height === scrollTop + window.innerHeight) {
      fn()
      fn.call(this)
    }
    return minHeight
	}
}
publicFunction.filterQuery([1,2,3,4], [3, 4])
publicFunction.timeFormat(new Date())
document.body.onscroll = function () {
  publicFunction.isBottom()
}

export default publicFunction
