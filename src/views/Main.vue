<template>
  <div>
    <h1>首页</h1>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>
