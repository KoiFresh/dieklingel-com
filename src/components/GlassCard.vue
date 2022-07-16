<template>
  <div class="container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class GlassCard extends Vue {
  public me = "Hallo Welt";
}
</script>

<style lang="sass" scoped>
.container
  background-color: rgba(200, 240, 240, .55)
  backdrop-filter: blur(5px)
  box-shadow: 0px 0px 5px rgba(240, 240, 240, 0.7)
  border-radius: 1em

.content
  margin: 1em
</style>
