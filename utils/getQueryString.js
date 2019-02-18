/** 
 *  @url {string} url 一个有效的get参数地址
 * */ 
export default function getQueryString (url) {
  if (typeof url === 'string') {
    let obj = {}
    let arr = url.split('?')[url.split('?').length - 1].split('&')
    arr.filter(item => {
      let split = item.split('=')
      obj[split[0]] = split[1]
    })
    return obj
  } else {
    throw new Error('このユーアールアドレスは有効なアドレスではありません')
  }
}