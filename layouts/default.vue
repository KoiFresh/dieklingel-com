<template>
  <div class="app">
    <PageHeader />
    <div class="body">
      <NuxtPage />
    </div>
    <PageFooter />
  </div>
</template>

<style lang="sass">
html, body
  margin: 0
  padding: 0
  font-family: 'Noto Sans JP', sans-serif
</style>

<style lang="sass" scoped>
.app
  height: 100vh
  display: grid
  grid-template-rows: auto 1fr auto

.body
  display: block
  margin: 0 auto
  max-width: 800px
</style>
