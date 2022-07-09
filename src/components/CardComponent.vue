<template>
  <div class="container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.container
  border-radius: 1.3em
  box-shadow: 2px 4px 5px #808080
  margin: 1em
  padding: 1em
  display: block
  transition: transform 0.5s
  text-align: left
  &:hover
    transition: transform 0.5s
    transform: scale(1.1)

.header
  font-weight: bold

.content
  margin: 0.6em
</style>
