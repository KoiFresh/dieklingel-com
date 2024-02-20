<script lang="ts" setup>
const props = defineProps<{
  file: string;
}>();
</script>

<template>
  <p>
    <a :href="props.file" target="_blank">
      {{ props.file.replace(/^.*[\\/]/, '') }}
    </a>
  </p>
</template>
