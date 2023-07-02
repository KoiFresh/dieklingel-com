<template>
  <main class="container">
    <ContentDoc>
      <template #not-found>Not Found!</template>
    </ContentDoc>
  </main>
</template>

<style lang="sass" scoped>
.container
  max-width: 80em
  padding: 1em
  margin: auto
</style>

<style lang="sass" module>
h2, h3, h4, h5, h6
  a
    text-decoration: none
    color: #616161
  &:before
    content: '🔗'
    padding: 0 0.2em 0 0
</style>
