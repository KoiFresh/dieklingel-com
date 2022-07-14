<template>
  <div class="container">
    <responsive-scroll-card
      from="1"
      to="100"
      path="@/assets/animations/dieklingel/:id:.png"
    >
      <div class="cards">
        <glass-card>
          <p>
            At the moment, our software consits out of three pieces. At first we
            have the frontend, hanging on your main entrance. This piece we call
            the base or sometimes core. Then there is the app, which is running
            on your smarthphone, your tablet and your desktop pc. And finally
            there is some type of service, which could be used, for example to
            send push notifications from the base to the app. I know, I said
            there are three pieses, but if we take it exactly, there is one
            more. We will call the fourth component third party, ironicg. The
            third party compontent is something like fhem as smarthome system or
            mosquitto as mqtt broker.
          </p>
        </glass-card>
        <glass-card style="margin-top: 45vh">
          <p class="headline">the base</p>
          <p>work in progress...</p>
        </glass-card>
        <glass-card>
          <p class="headline">the app</p>
          <p>
            <a style="color: grey" href="https://app.dieklingel.de/"
              >Check it out!</a
            >
          </p>
        </glass-card>
        <glass-card>
          <p class="headline">services</p>
          <p>work in progress...</p>
        </glass-card>
        <glass-card>
          <p class="headline">third party</p>
          <p>
            As third party components we look at the mosquitto mqtt broker. We
            use mqtt as our main protocol. So you have to use mosquitto or any
            other mqtt broker of your choice to connect with. Another third
            party is a smarthome system like fhem. The base is kept lightweight,
            without much of service included, but extenable. Use fhem to save a
            picture to your database, notify your app, or even control the
            display. In combination with fhem you could use another service
            distributed by us. The service we talk about is called
            dieklingel-fcm-worker and it provides an an api to send push
            notifications to the dieklingel-app over another third party
            component called "Google Firebase Cloud Messaging". It comes to a
            chain of services, third party components and built in functions,
            all configured by the user.
          </p>
        </glass-card>
      </div>
    </responsive-scroll-card>
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
import GlassCard from "@/components/GlassCard.vue";
import ResponsiveScrollCard from "@/components/ResponsiveScrollCard.vue";

@Options({
  components: { GlassCard, ResponsiveScrollCard },
})
export default class SoftwareView extends Vue {}
</script>

<style lang="sass" scoped>
.text
  margin: 2em
  text-align: center
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

.cards
  margin: 0.75em
  display: grid
  grid-template-columns: 1fr 1fr
  > *
    $margin: 0.6em
    margin: $margin
    grid-column: 1 / span 2
    width: calc(50% - $margin * 2)
    min-width: 275px
    transition: transform 0.2s 0s
    &:nth-child(odd)
      justify-self: start
      &:hover
        transform: rotate(1deg) scale(1.05)
    &:nth-child(even)
      justify-self: end
      &:hover
        transform: rotate(-1deg) scale(1.05)
</style>
