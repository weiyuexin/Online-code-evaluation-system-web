<template>
<NavBar></NavBar>
</template>

<script>
import NavBar from "@/components/oj/common/NavBar";
export default {
  name: 'Main',
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value1: '',
    }
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>
