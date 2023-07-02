<template>
  <main>
    <div class="list">
      <ContentList :query="{ path: '/blog' }" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <nuxt-link :to="article._path">{{ article.title }}</nuxt-link>
        </div>
      </ContentList>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'blog',
});
</script>

<style lang="sass" scoped>
.list
	padding: 1em
</style>