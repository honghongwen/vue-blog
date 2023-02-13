<template>
  <el-container style="height: 100%">
    <el-aside width="200px" style="background-color: #f1f1f1">
      <div></div>
      <el-menu
        :default-active="'0'"
        active-text-color="#000000"
        text-color="#777777"
        background-color="#f1f1f1"
        mode="vertical"
        @select="selectItem"
      >
        <el-menu-item
          v-for="item in items"
          :index="item.index.toString()"
          :key="item.index"
        >
          <div id="text">{{ item.title }}</div>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-main style="padding: 0">
      <Markdown :content="content"></Markdown>
    </el-main>
  </el-container>
</template>
<script>
import Markdown from "./Markdown.vue";
import FM from "../tools/FileManager.js";
export default {
  mounted() {
    FM.getPostContent(this.topic, this.items[this.currentIndex].title).then(
      (res) => {
        this.content = res.data;
      }
    );
  },
  props: ["items", "topic"],
  components: {
    Markdown: Markdown,
  },
  data() {
    return {
      currentIndex: 0,
      content: "",
    };
  },
  methods: {
    selectItem(index) {
      console.log("body index:" + index);
      this.currentIndex = index;
    },
  },
  watch: {
    currentIndex: function (val) {
      FM.getPostContent(this.topic, this.items[val].title).then((res) => {
        this.content = res.data;
      });
    },
    topic: function (val) {
      FM.getPostContent(val, this.items[this.currentIndex].title).then(
        (res) => {
          this.content = res.data;
        }
      );
    },
  },
};
</script>

<style scoped>
.el-menu-item.is-active {
  background-color: #ffffff !important;
}
</style>