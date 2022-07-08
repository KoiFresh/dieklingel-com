<template>
  <div class="container">
    <p class="text">
      For questions, suggestions or improvments, do not hesitate to contact us.
      Your could either contact us via email
      <a href="mailto:kai.mayer@dieklingel.com" target="_blank">
        kai.mayer@dieklingel.com
      </a>
      or via instagram
      <a href="https://www.instagram.com/koifreshofficial/" target="_blank">
        @koifreshofficial</a
      >. Oh and hey, here is my
      <a href="https://github.com/KoiFresh" target="_blank">GitHub</a>.
    </p>
  </div>
</template>

<style lang="sass" scoped>
.container
  box-shadow: 2px 2px 5px #808080
  box-sizing: border-box
  background-color: #ffa100
  margin: 0.8em 0
  padding: 1em 1em

.text
  text-align: center
  a
    color: #ffea00
    font-weight: 100
    text-decoration: none
    white-space: nowrap
    &:before
      content: '[ '
    &:after
      content: ' ]'
    &:before, &:after
      color: #e303fc
    &:hover
      color: #e303fc
      &:before, &:after
        color: #ffea00
</style>
