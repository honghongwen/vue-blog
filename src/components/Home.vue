<template>
  <el-container id="container">
    <el-header style="width: 100%; height: 120px; padding: 0">
      <Header :items="navItems" v-on:selected="changeSelected"></Header>
    </el-header>
    <el-main style="padding: 0">
      <Body :items="bodyItems" :topic="navItems[currentTopicIndex].title"></Body>
    </el-main>
  </el-container>
</template>

<script>
import Header from "./Header.vue";
import Body from "./Body.vue";
import FM from "../tools/FileManager.js";
export default {
  components: {
    Header: Header,
    Body: Body,
  },
  data() {
    return {
      navItems: FM.getAllTopic().map((item, ind) => {
        return {
          index: ind,
          title: item,
        };
      }),
      currentTopicIndex: 0,
    };
  },
  methods: {
    changeSelected(index) {
      this.currentTopicIndex = index;
    },
  },
  computed: {
    bodyItems() {
      return FM.getPosts(this.currentTopicIndex).map((item, ind) => {
        return {
          index: ind,
          title: item,
        };
      });
    },
  },
};
</script>

<style scoped>
#container {
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 30px;
  height: 800px;
}

</style>