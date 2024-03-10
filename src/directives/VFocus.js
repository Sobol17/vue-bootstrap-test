export default {
  name: 'focus',

  mounted(item, binding) {
    binding.value ? item.focus() : null;
  },
};
