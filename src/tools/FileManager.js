import axios from "axios"

const FileManger = {
  path: "/static/post/",
  //   获取主题
  getAllTopic: function () {
    return ["杂货", "工作", "工具", "学习", "前端"]
  },
  //   获取主题下所有文章
  getPosts: function (topic) {
    topic = Number.parseInt(topic);
    switch (topic) {
      case 0: 
        return ["Vue实现博客", "gitbook博客", "hexo博客"]
      case 1:
        return ["CICD", "工作", "A6", "其他", "书", "部署规范"];
      case 2:
        return ["MP生成", "加密"];
      case 3:
        return ["前端", "后端", "运维", "架构"]
      case 4:
        return ["常用标签", "CSS常见问题", "Vue常见问题", "Vue实现博客"]
    }
  },
  //   获取文章详细内容
  getPostContent: function (topicName, postName) {
    let url = this.path + topicName + "/" + postName + ".md";
    return new Promise((res, rej) => {
      axios.get(url).then((response) => {
        console.log(response.data)
        res(response)
      }, rej)
    })
  }
}


export default FileManger
