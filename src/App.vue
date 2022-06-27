<template>
  <div>
    <div class="header">
      <img class="logo" src="@/assets/logo_2500x500_free.png" />
      <div class="navbar">
        <router-link to="/">dieKlingel</router-link>
        <router-link to="/a">the app</router-link>
        <router-link to="/b">hardware</router-link>
        <router-link to="/c">software</router-link>
        <router-link to="/">contact</router-link>
        <router-link to="/">aboutu us</router-link>
      </div>
    </div>
    <div class="body"></div>
    <div class="footer"></div>
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <!--<router-view />-->
  <FooterBar></FooterBar>
  <span>Hallo</span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FooterBar from "./components/FooterBar.vue";

@Options({
  components: FooterBar,
})
export default class App extends Vue {}
</script>

<style lang="sass">
html, body
  margin: 0
  padding: 0
  font-family: 'Noto Sans JP', sans-serif

body
  height: 100%
  display: grid
  grid-template-rows: auto 1fr auto
</style>

<style lang="sass" scoped>
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
      font-weight: bold
    &:hover
      color: #333
      background-color: #ccc
</style>
