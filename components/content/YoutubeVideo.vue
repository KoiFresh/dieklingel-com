<script lang="ts" setup>
const props = defineProps<{
  src: string;
}>();
</script>

<template>
  <iframe
    :src="props.src"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  >
  </iframe>
</template>
