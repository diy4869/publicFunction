/**
 * 
 * @param {number}  当前页数 currentPage
 * @param {number}  每页的数据量 pageSize
 * @returns {array} res 当前页的数据 totalArr
 */
export default function pagination (currentPage, pageSize, totalArr) {
  let res = totalArr.slice((currentPage * pageSize) - pageSize, currentPage * pageSize)
  return res
}