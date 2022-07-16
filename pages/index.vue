<template>
  <div class="container">
    <p class="text">
      <a href="#"> die<i class="icon-logo"></i>Klingel </a> is a project under
      the direction of Kai Mayer and Sven Schoch. The idea of the project is it,
      to build a lightweight doorbell, with a bunch of features like viedo
      calling or unlock the door from all over the world. And this for a
      fraction, of what it normaly costs.
    </p>
    <p class="text">
      <a href="#">die<i class="icon-logo-inverted"></i>Klingel</a> is not a
      ready-to-use
      <a href="https://de.wikipedia.org/wiki/Plug_%26_Pray" target="_blank">
        plug and pray
      </a>
      product ;). Furthermore with some settings it intergrates into your
      smarthome system like <a href="https://fhem.de/" target="_blank">fhem</a>.
      What if you won't connect from all over the world? Easy one, than don't
      set it up. Do i have to use the app? No! the app is an implementation of
      the API, on which the doorbell is build on top of. And before you ask, it
      is mostly
      <a href="https://de.wikipedia.org/wiki/MQTT" target="_blank">mqtt</a>.
      Over all, it is a mixture of
      <a href="https://de.wikipedia.org/wiki/MQTT" target="_blank">mqtt</a>,
      <a href="https://de.wikipedia.org/wiki/WebRTC" target="_blank">webrtc</a>
      and some kind of
      <a
        href="https://de.wikipedia.org/wiki/JavaScript_Object_Notation"
        target="_blank"
      >
        json
      </a>
      . And straight ahead, we also do signaling over mqtt. If you are
      interested, then keep this website in mind. Here we will publish
      information about the project.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
});
</script>

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