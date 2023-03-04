<template>
  <div>
    <NavBar :active="`/`"></NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/oj/common/NavBar";

export default {
  name: 'Main',
  data() {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>
