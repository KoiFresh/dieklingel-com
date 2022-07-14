<template>
  <div class="container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.container
  background-color: rgba(255, 255, 255, .15)
  backdrop-filter: blur(5px)
  box-shadow: 0px 0px 5px rgba(240, 240, 240, 0.7)
  border-radius: 1em

.content
  margin: 1em
</style>
