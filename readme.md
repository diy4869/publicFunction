> 公共函数
- 参数过滤
```
 未完善，仍需改进
```
- 时间格式化 timeFormat

参数 | 类型 | 注释 
---|---|---
time | number or Date Object | 时间戳 或者日期对象
temp | boolean  | true 返回年月日带时间 false只返回年月日
- 倒计时

- 滚动条是否滚动到底部 isBottom

参数 | 类型 | 注释 
---|---|---
fn | function | 滚动到底部需要执行的函数

```
返回一个距离底部的高度
```
- 防抖函数 debounce

参数 | 类型 | 注释 
---|---|---
fn    | function | 执行的函数
delay | number  | 延迟时间

- 节流函数 throttle

参数 | 类型 | 注释 
---|---|---
fn    | function | 执行的函数
delay | number  | 延迟时间

- 获取url参数 getQueryString

参数 | 类型 | 注释 
---|---|---
url    | string | 一个有效的get参数或url地址

- 分页 pagination 

参数 | 类型 | 注释 
---|---|---
currentPage    | number | 当前页
pageSize | number | 每页的数量
totalArr | array | 总数据的数组

```
  返回当前页的数据
```