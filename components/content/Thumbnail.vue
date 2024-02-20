<script lang="ts" setup>
const props = defineProps<{
  src: string;
}>();
</script>

<template>
  <p>
    <img :src="props.src" />
  </p>
</template>

<style lang="sass" scoped>
img
  display: inline-block
  max-width: 128px
  max-height: 128px
  border-radius: 15px
</style>
