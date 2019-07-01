<template>
  <div class="main">
    <div class="time-title">
      <h1>已有时长</h1>
    </div>
    <div class="time-body">
      <h1>{{time}}小时</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 100
    }
  },
}
</script>

<style>
.main {
  height: 180px;
  width: 200px;
  border: 1px solid #dddddd;
}
.time-title {
  background: #f5f5f5;
}
.time-body {
  background: #ffffff;
}
</style>
