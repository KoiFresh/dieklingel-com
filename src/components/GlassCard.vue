<template>
  <div class="container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.container
  color: white
  background-color: rgba(255, 255, 255, .15)
  backdrop-filter: blur(5px)

  border-radius: 1em

.content
  margin: 1em
</style>
