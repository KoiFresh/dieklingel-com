<template>
  <div>
    <div class="text">
      <p>
        At the moment, our software consits out of three pieces. At first we
        have the frontend, hanging on your main entrance. This piece we call the
        base or sometimes core. Then there is the app, which is running on your
        smarthphone, your tablet and your desktop pc. And finally there is some
        type of service, which could be used, for example to send push
        notifications from the base to the app. I know, I said there are three
        pieses, but if we take it exactly, there is one more. We will call the
        fourth component third party, ironicg. The third party compontent is
        something like fhem as smarthome system or mosquitto as mqtt broker.
      </p>
      <div class="card-container">
        <card-component class="card">
          <template v-slot:header>the base</template>
          <template v-slot:content>work in progress...</template>
        </card-component>
        <card-component class="card">
          <template v-slot:header>the app</template>
          <template v-slot:content>
            <a href="https://app.dieklingel.de/">Check it out!</a>
          </template>
        </card-component>
        <card-component class="card">
          <template v-slot:header>services</template>
          <template v-slot:content> work in progress... </template>
        </card-component>
        <card-component class="card">
          <template v-slot:header>third party</template>
          <template v-slot:content> work in progress... </template>
        </card-component>
      </div>
    </div>
    <div class="logos">
      <a href="https://flutter.dev/" target="_blank">
        <img
          src="https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg"
          alt="flutter-logo"
        />
      </a>
      <a href="https://webrtc.org/" target="_blank">
        <img
          src="https://www.gstatic.com/devrel-devsite/prod/vbf6b989196010ceeb8e96a715bcffec43e0681e7e60c6ad6a2fb8ac1de5f2a0f/webrtc/images/lockup.svg"
          alt="webrtc-logo"
        />
      </a>
      <a href="https://mqtt.org/" target="_blank">
        <img src="https://mqtt.org/assets/img/mqtt-logo.svg" alt="mqtt-logo" />
      </a>
      <a href="https://www.raspberrypi.org/" target="_blank">
        <img
          src="https://www.raspberrypi.org/pagekit-assets/media/images/4913a547895720ff30c1.svg"
          alt="raspberrypi-logo"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardComponent from "@/components/CardComponent.vue";

@Options({
  components: { CardComponent },
})
export default class SoftwareView extends Vue {}
</script>

<style lang="sass" scoped>
.text
  text-align: center
  margin: 2em
  .subtitle
    font-weight: bold
    display: block

.logos
  display: flex
  justify-content: center
  flex-wrap: wrap
  img
    height: 3.5em
    margin: 1em
    transition: transform 0.5s 0s
    &:hover
      transition: transform 0.5s 0s
      transform: scale(1.1)

.card-container
  display: inline-flex
  flex-flow: column wrap

.card
  background-color: #ffde85
</style>
