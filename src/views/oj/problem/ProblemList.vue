<template>
<div>
  <NavBar :active="`/problems`"></NavBar>
</div>
</template>

<script>
import NavBar from "@/components/oj/common/NavBar.vue";
export default {
  name: "ProblemList",
  data() {
    return {};
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>
