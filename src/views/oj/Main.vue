<template>
  <div>
    <NavBar :active="`/`"></NavBar>
    <div class="content">

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/oj/common/NavBar";
import Footer from "@/components/oj/common/Footer";

export default {
  name: 'Main',
  data() {
    return {}
  },
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>

</style>
