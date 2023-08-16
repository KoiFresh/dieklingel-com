<template>
  <div>
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