<template>
  <div class="markdown-body main">
    <ContentDoc>
      <template #not-found> Not Found! </template>
    </ContentDoc>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blog',
});
</script>

<style lang="sass" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css')

.main
  padding: 0 2em
</style>
