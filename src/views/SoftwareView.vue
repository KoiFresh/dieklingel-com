<template>
  <div class="container">
    <div ref="scrollcontainer">
      <responsive-scroll-card
        ref="scrollcard"
        from="1"
        to="100"
        path="animations/dieklingel/:id:.jpg"
        fallback="animations/dieklingel/0008.jpg"
        @scrolled="onScroll"
      >
        <div class="cards">
          <glass-card
            class="center"
            v-bind:style="
              desktopScrollEngine(scrollPercentage, 0, 20, 30, 30, 5, 5)
            "
          >
            <p>
              At the moment, our software consits out of three pieces. At first
              we have the frontend, hanging on your main entrance. This piece we
              call the base or sometimes core. Then there is the app, which is
              running on your smarthphone, your tablet and your desktop pc. And
              finally there is some type of service, which could be used, for
              example to send push notifications from the base to the app. I
              know, I said there are three pieses, but if we take it exactly,
              there is one more. We will call the fourth component third party,
              ironicg. The third party compontent is something like fhem as
              smarthome system or mosquitto as mqtt broker.
            </p>
          </glass-card>
          <glass-card
            class="right"
            v-bind:style="
              desktopScrollEngine(scrollPercentage, 20, 40, 50, 20, 5, 5)
            "
          >
            <p class="headline">the base</p>
            <p>work in progress...</p>
          </glass-card>
          <glass-card
            class="left"
            v-bind:style="
              desktopScrollEngine(scrollPercentage, 40, 60, 20, 50, 5, 5)
            "
          >
            <p class="headline">the app</p>
            <p>
              <a style="color: grey" href="https://app.dieklingel.de/"
                >Check it out!</a
              >
            </p>
          </glass-card>
          <glass-card
            class="left"
            v-bind:style="
              desktopScrollEngine(scrollPercentage, 60, 80, 50, 20, 5, 5)
            "
          >
            <p class="headline">services</p>
            <p>work in progress...</p>
          </glass-card>
          <glass-card
            class="right"
            v-bind:style="
              desktopScrollEngine(scrollPercentage, 80, 100, 20, 20, 5, 5)
            "
          >
            <p class="headline">third party</p>
            <p>
              As third party components we look at the mosquitto mqtt broker. We
              use mqtt as our main protocol. So you have to use mosquitto or any
              other mqtt broker of your choice to connect with. Another third
              party is a smarthome system like fhem. The base is kept
              lightweight, without much of service included, but extenable. Use
              fhem to save a picture to your database, notify your app, or even
              control the display. In combination with fhem you could use
              another service distributed by us. The service we talk about is
              called dieklingel-fcm-worker and it provides an an api to send
              push notifications to the dieklingel-app over another third party
              component called "Google Firebase Cloud Messaging". It comes to a
              chain of services, third party components and built in functions,
              all configured by the user.
            </p>
          </glass-card>
        </div>
      </responsive-scroll-card>
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
import GlassCard from "@/components/GlassCard.vue";
import ResponsiveScrollCard from "@/components/ResponsiveScrollCard.vue";
import { h } from "@vue/runtime-core";

@Options({
  components: { GlassCard, ResponsiveScrollCard },
})
export default class SoftwareView extends Vue {
  private scrollPercentage = 0;

  onScroll(percentage: number): void {
    this.scrollPercentage = percentage;
  }

  get isMobile(): boolean {
    return window.matchMedia("only screen and (max-width: 760px)").matches;
  }

  desktopScrollEngine(
    currentValue: number,
    visibleFrom: number,
    visibleTo: number,
    screenTopOffset: number,
    screenBottomOffset: number,
    fadeIn: number,
    fadeOut: number
  ) {
    const container = this.$refs.scrollcontainer as HTMLDivElement;
    if (!container)
      return {
        /*display: "none"*/
      };
    const containerHeight: number = container.getBoundingClientRect().height;
    const screenHeight = document.documentElement.clientHeight;

    const opacityIn =
      currentValue > visibleFrom && currentValue < visibleFrom + fadeIn
        ? this.map(currentValue, visibleFrom, visibleFrom + fadeIn, 0, 1)
        : 1;
    const opacityOut =
      currentValue > visibleTo - fadeOut && currentValue < visibleTo
        ? this.map(currentValue, visibleTo - fadeOut, visibleTo, 1, 0)
        : 1;

    let onScreenOffset = this.map(
      currentValue,
      visibleFrom,
      visibleTo,
      screenHeight * this.map(screenBottomOffset, 0, 100, 1, 0),
      0 + screenHeight * this.map(screenTopOffset, 0, 100, 0, 1)
    );
    let topOffset = onScreenOffset;

    return {
      position: "fixed",
      transform: "translateY(-50%)",
      top: topOffset + "px",
      opacity: opacityOut * opacityIn,
      display:
        currentValue > visibleFrom && currentValue < visibleTo
          ? "block"
          : "none",
    };
  }

  map(
    current: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ): number {
    return (
      ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  }
}
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
  height: 300vh
  position: relative
  > *
    $margin: 0.6em
    $width: calc(50% - $margin * 2)
    position: absolute
    display: none
    width: $width
    min-width: 275px
    transition: transform 0.2s 0s
    &.right
      right: $margin
    &.left
      left: $margin
    &.center
      left: calc(25% - $margin)

.cards
  > *
    transition: opacity 0.2s 0s
  .invisible
    opacity: 0
</style>
