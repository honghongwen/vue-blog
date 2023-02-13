import axios from "axios"

const FileManger = {
  path: "/static/post/",
  //   获取主题
  getAllTopic: function () {
    return ["工作", "工具", "学习"]
  },
  //   获取主题下所有文章
  getPosts: function (topic) {
    topic = Number.parseInt(topic);
    switch (topic) {
      case 0:
        return ["CICD", "信丰物流", "A6", "其他", "书", "部署规范"];
      case 1:
        return ["MP生成", "加密"];
      case 2:
        return ["前端", "后端", "运维", "架构"]
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
