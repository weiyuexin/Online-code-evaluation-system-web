<template>
  <el-menu :default-active="activeIndex" router active-text-color="#409EFF" class="oj-navbar" mode="horizontal"
           @select="handleSelect">
    <el-menu-item index="0" class="logo"><img src="@/assets/logo.png"/></el-menu-item>
    <el-menu-item index="/"><i class="el-icon-s-home"></i>首页</el-menu-item>
    <el-menu-item index="/problems"><i class="el-icon-s-grid"></i>题目</el-menu-item>
    <el-menu-item index="/login"><i class="el-icon-trophy"></i>竞赛</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me"><i class="el-icon-s-marketing"></i>测评</a></el-menu-item>
    <el-menu-item index="5"><a href="https://www.ele.me"><i class="el-icon-s-data"></i>排行</a></el-menu-item>
    <el-menu-item index="6"><a href="https://www.ele.me"><i class="el-icon-s-opportunity"></i>博客</a></el-menu-item>
    <el-menu-item index="7"><a href="https://www.ele.me"><i class="el-icon-info"></i>关于</a></el-menu-item>
    <el-menu-item index="9" class="register">
      <el-button round>注册</el-button>
    </el-menu-item>
    <el-menu-item index="8" class="login">
      <el-button type="primary" round>登录</el-button>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activeIndex: "",
    };
  },
  props: { //接收父组件传递的参数
    active: String
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    this.activeIndex = this.active
  }
}
</script>

<style scoped>
.oj-navbar {
  position: fixed;
  width: 100%;
  top: 0;
  border-bottom: solid 1px #EFF3F5;
}

.logo {
  width: 150px !important;
}

.register {
  float: right !important;
  margin-right: 100px !important;
}

.login {
  float: right !important;
}

.logo img {
  width: 60px !important;
}

.el-menu.el-menu--horizontal {
  border-bottom: solid 0px;
}

.el-menu--horizontal > .el-menu-item {
  width: 110px;
  font-size: 15px;
}

.el-menu--horizontal > .el-menu-item img {
  width: 80px;
  height: 60px;
}

</style>
