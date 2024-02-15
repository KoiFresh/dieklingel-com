<template>
  <div class="header">
    <nuxt-img
      format="webp"
      src="/logo_2500x500_free.png"
      sizes="sm:100vw md:50vw lg:600px"
      alt="dieKlingel Logo und Text"
    ></nuxt-img>
    <div class="navbar">
      <nuxt-link to="/" exact-active-class="nuxt-link-exact-active">
        die<i class="icon-logo-inverted"></i>Klingel
      </nuxt-link>
      <!--<router-link to="/a">the app</router-link>
        <router-link to="/b">hardware</router-link>-->
      <nuxt-link to="/software" exact-active-class="nuxt-link-exact-active">
        software
      </nuxt-link>
      <nuxt-link to="/hardware" exact-active-class="nuxt-link-exact-active">
        hardware
      </nuxt-link>
      <nuxt-link to="/contact" exact-active-class="nuxt-link-exact-active">
        contact
      </nuxt-link>
      <!--<nuxt-link to="/blog" exact-active-class="nuxt-link-exact-active">
        blog
      </nuxt-link>-->
      <!--<router-link to="/">aboutu us</router-link>-->
    </div>
  </div>
</template>

<style lang="sass" scoped>
.header
  background-color: #ccc
  text-align: center
  position: relative
  padding: 10px 0 min(4em, 4vw) 0px
  &:before
    content: ""
    left: 0,
    bottom: 0,
    width: 100%,
    position: absolute
    height: min(3em, 3vw)
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
      &.nuxt-link-exact-active
        color: #ffc847
      &:hover
        color: #333
        background-color: #ccc
a.nuxt-link-active
  color: #000 !important
</style>
