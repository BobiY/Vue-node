const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceData = function (opt) {
  console.log('opt', opt)
  let articles = []
  for (let i = 0; i < 30; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}
// const produceData = {
//   'stat': 1,
//   'data': [
//     {
//       'id': '2',
//       'name': '一年级'
//     },
//     {
//       'id': '3',
//       'name': '二年级'
//     },
//     {
//       'id': '4',
//       'name': '三年级'
//     },
//     {
//       'id': '5',
//       'name': '四年级'
//     },
//     {
//       'id': '6',
//       'name': '五年级'
//     },
//     {
//       'id': '8',
//       'name': '初一'
//     }
//   ],
//   'info': [

//   ]
// }

// const getUrls = (apiUrl) => {
// }
Mock.mock('/exam/reportAnalysi/', /post|get/i, {
  'rankGrade': 'string',
  'commentTeacher': 'string',
  'module': [
    {
      'moduleId': 0,
      'moduleName': 'string',
      'questionId': 0,
      'accuracy': 0,
      'accuracyGrade': 0,
      'result': 'string'
    }
  ]
})

Mock.mock('/news', /post|get/i, produceData)// 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据
