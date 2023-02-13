<template>
  <el-container style="margin: 0; padding: 0">
    <el-header style="margin: 0; padding: 0">
      <div id="title">Wen Blog</div>
    </el-header>
    <el-main style="margin: 0; padding: 0">
      <el-menu
        :default-active="'0'"
        mode="horizontal"
        background-color="#e8e7e3"
        text-color="#777777"
        active-text-color="#000000"
        @select="selectItem"
      >
        <el-menu-item
          v-for="item in items"
          :index="(item.index).toString()"
          :key="item.index"
        >
          <div id="text">{{ item.title }}</div>
        </el-menu-item>
      </el-menu>
    </el-main>
  </el-container>
</template>


<script>
export default {
  props: ["items"],
  data() {
    return {};
  },
  methods: {
    selectItem(index, indexPath) {
      console.log("header index:" + index + ":" + indexPath)
      this.$emit("selected", index);
    },
  },
};
</script>

<style scoped>
#title {
  color: brown;
  font-size: 40px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#text {
  font-size: 20px;
}
</style>