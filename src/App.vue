<template>
  <div class="app">
    <div class="header">
      <img class="logo" src="@/assets/logo_2500x500_free.png" />
      <div class="navbar">
        <router-link to="/">
          die<i class="icon-logo-inverted"></i>Klingel
        </router-link>
        <!--<router-link to="/a">the app</router-link>
        <router-link to="/b">hardware</router-link>-->
        <router-link to="/software">software</router-link>
        <router-link to="/contact">contact</router-link>
        <!--<router-link to="/">aboutu us</router-link>-->
      </div>
    </div>
    <div class="body">
      <router-view />
    </div>
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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {}
</script>

<style lang="sass" src="@/assets/style.sass"></style>

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

.header
  background-color: #ccc
  text-align: center
  position: relative
  padding: 10px 0 5vw 0px
  &:before
    content: ""
    left: 0,
    bottom: 0,
    width: 100%,
    position: absolute
    height: 3.4vw
    background-color: transparent
    background-image: linear-gradient(to bottom right, #cccccc 49% , white 51%)
  .logo
    max-width: 80%
    max-height: 120px
    margin: 20px 0px 5px 0px
  .navbar
    background-color: #333
    margin-top: 5px
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    box-shadow: 2px 2px 5px #808080
    & a
      flex: 1 1 auto
      color: #f2f2f2
      text-decoration: none
      box-sizing: border-box
      padding: 14px 16px
      &.router-link-exact-active
        color: #ffc847
      &:hover
        color: #333
        background-color: #ccc

.body
  display: block

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
