<center style="background-color: bisque; height: 50px; line-height: 50px"><h2> Vue实现博客</h2></center>

## 1.前端项目

### 1.1 创建项目
> 使用的vue2版本

```shell
 vue init webpack vue-blog
```

### 1.2 完善npm包
> 用到以下组件
> * marked
> * element-ui
> * axios
> * highlight

#### 1.2.1 element-ui
```shell
npm i element-ui -S
```

#### 1.2.2 axios
```shell
npm install --save axios vue-axios
```

#### 1.2.3 marked
```shell
npm install marked -S
```

### 1.2.4 highlight
```shell
npm install highlight.js --save
```

> 总的dependencies如下
```javascript
  "dependencies": {
    "axios": "^1.3.2",
    "element-ui": "^2.15.13",
    "highlight.js": "^11.7.0",
    "marked": "^4.2.12",
    "vue": "^2.5.2",
    "vue-axios": "^3.5.2"
  }
```

### 1.3 Layout布局

> 布局如下，用element-ui实现
![layout](/static/post/img/layout.png)


### 1.4 集成marked和highlight

> 代码如下

```javascript
import axios from "axios"

const FileManger = {
  path: "/static/post/",
  //   获取主题
  getAllTopic: function () {
    return ["工作", "工具", "学习", "前端"]
  },
  //   获取主题下所有文章
  getPosts: function (topic) {
    topic = Number.parseInt(topic);
    switch (topic) {
      case 0:
        return ["CICD", "工作", "A6", "其他", "书", "部署规范"];
      case 1:
        return ["MP生成", "加密"];
      case 2:
        return ["前端", "后端", "运维", "架构"]
      case 3:
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

```

## 2.总结

> 实现方案总体为，在el-main中使用marked组件，然后通过axios获取到md资源，之后通过marked替换即可。