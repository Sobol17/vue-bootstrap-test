<script setup>
import IconMagnifier from "@/components/IconMagnifier.vue";
const props = defineProps({
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="search-input">
    <input
      v-focus="true"
      type="text"
      class="form-control mt-4"
      placeholder="search"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    >
    <IconMagnifier class="search-icon" />
  </div>
</template>

<style scoped lang="scss">
.search-input {
  margin: 0 auto;
  width: 300px;
  position: relative;
}
.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
</style>