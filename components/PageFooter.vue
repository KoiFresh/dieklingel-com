<template>
  <div class="footer">
    <div>
      <span>
        directed by <a href="#" class="link">Kai Mayer</a> and
        <a href="#" class="link">Sven Schoch</a>
      </span>
    </div>
    <div class="navbar">
      <router-link to="/credit-notes" class="link">credit notes</router-link>
      <router-link to="/privacy-policy" class="link">
        privacy policy
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'header',
})
</script>

<style lang="sass" scoped>
.footer
  position: relative
  display: block
  text-align: center
  padding: calc(3.4vw + 10px) 0px 10px 0px
  background-color: #707070
  &:before
    content: ""
    top: 0
    left: 0
    width: 100%
    position: absolute
    height: 3.4vw
    background-color: transparent
    background-image: linear-gradient(to top left, #707070 49% , white 51%)
  .navbar
    margin: 30px
    & a
      display: inline-block
      margin: 5px
      text-decoration: none
      color: #000
      border: 1px so
      padding: 8px 20px
      border-right: 1px solid #000
      border-left: 1px solid #000
      &:hover
        color: #fff

a.link
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

