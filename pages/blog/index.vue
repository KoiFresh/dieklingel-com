<template>
  <main>
    <div class="list">
      <ContentList :query="{ path: '/blog' }" v-slot="{ list }">
        <div class="article" v-for="article in list" :key="article._path">
          <nuxt-link class="title" :to="article._path">
            {{ article.title }}
          </nuxt-link>
          <div class="description">
            {{ article.description }}
          </div>
          <div class="metadata">
            <span v-if="article.lang">
              Language: {{ article.lang }} <br />
            </span>
            <span v-if="article.created">
              Created: {{ new Date(article.created).toDateString() }}
              <br />
            </span>
            <span v-if="article.author">
              Author: {{ article.author }} <br />
            </span>
            <br />
          </div>
          <div class="tags">
            <div class="tag" v-for="tag in article.tags" :key="tag">
              #{{ tag }}
            </div>
          </div>
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
  margin: 0 auto
  max-width: 800px
  padding: 1em
  display: flex
  flex-wrap: wrap

.article
  display: block
  margin: 0.4em
  background-color: #f6f8fa
  border-radius: 1em
  padding: 0.4em 1em
  flex-grow: 4
  flex-shrink: 4
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)

.title
  display: inline-block
  margin: 0.4em 0em

.description
  margin: 0.3em 0
  font-size: small
  flex-shrink: 4

.metadata
  font-size: 0.75em
  color: #7a7a7a

.tags
  display: flex
  flex-wrap: wrap
  gap: 0.2em

.tag
  display: block
  font-size: 0.75em
  color: #7a7a7a
  background-color: #e1e6ed
  padding: 0.5em
  border-radius: 1em
</style>