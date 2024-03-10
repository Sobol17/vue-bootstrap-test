<script setup>
const props = defineProps({
  title: String,
  text: String,
  author: String
})
</script>

<template>
  <div class="card" style="width: 360px">
    <div class="card-body body">
      <div class="card-title text-primary fw-medium fs-5">{{ title }}</div>
      <div class="card-text">{{ text }}</div>
      <div class="card-subtitle pt-3 sub">{{ author }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sub {
  color: grey;
  font-size: 14px;
  margin-top: auto;
}
.body {
  display: flex;
  flex-direction: column;
}
</style>