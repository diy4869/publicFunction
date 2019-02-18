export default function filterQuery(args, query) {
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