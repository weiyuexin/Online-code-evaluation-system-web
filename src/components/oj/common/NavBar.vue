<template>
  <el-menu :default-active="activeIndex" active-text-color="#409EFF" class="oj-navbar" mode="horizontal"
           @select="handleSelect">
    <el-menu-item index="0" class="logo"><img src="@/assets/logo.png"/></el-menu-item>
    <el-menu-item index="1"><a href="https://www.ele.me"><i class="el-icon-s-home"></i>Home</a></el-menu-item>
    <el-menu-item index="2"><a href="https://www.ele.me"><i class="el-icon-s-grid"></i>Problems</a></el-menu-item>
    <el-menu-item index="3"><a href="https://www.ele.me"><i class="el-icon-trophy"></i>Contests</a></el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me"><i class="el-icon-s-marketing"></i>Status</a></el-menu-item>
    <el-menu-item index="5"><a href="https://www.ele.me"><i class="el-icon-s-data"></i>Rank</a></el-menu-item>
    <el-menu-item index="6"><a href="https://www.ele.me"><i class="el-icon-s-opportunity"></i>Blogs</a></el-menu-item>
    <el-menu-item index="7"><a href="https://www.ele.me"><i class="el-icon-info"></i>About</a></el-menu-item>
    <el-menu-item index="9" class="register">
      <el-button round>Sign up</el-button>
    </el-menu-item>
    <el-menu-item index="8" class="login">
      <el-button type="primary" round>Sign in</el-button>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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

.oj-navbar ul li a {
  font-size: 300px;
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
