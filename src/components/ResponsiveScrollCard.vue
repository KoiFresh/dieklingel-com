<template>
  <div ref="content" class="content">
    <canvas class="canvas" ref="canvas"></canvas>
    <div class="content-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ResponsiveScrollCard extends Vue {
  private currentFrameIndex = 1;
  private canvas: HTMLCanvasElement | undefined;
  private context: CanvasRenderingContext2D | null | undefined;
  private content: HTMLDivElement | undefined;

  mounted(): void {
    this.canvas = this.$refs.canvas as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.content = this.$refs.content as HTMLDivElement;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    requestAnimationFrame(this.renderScrollCard);
    window.addEventListener("scroll", this.scrollListener);
  }

  unmounted(): void {
    window.removeEventListener("scroll", this.scrollListener);
  }

  scrollListener(): void {
    if (!this.content) return;

    const contentStartY: number =
      this.content.getBoundingClientRect().top + window.scrollY;
    const contentEndY: number =
      contentStartY + this.content.getBoundingClientRect().height;

    const maxScrollTop = contentEndY - innerHeight - contentStartY;

    const scrollTop = Math.min(
      maxScrollTop,
      Math.max(0, this.content.getBoundingClientRect().top * -1)
    );

    const pixelPerFrame = maxScrollTop / 30;
    const frameIndex = Math.floor(scrollTop / pixelPerFrame);
    this.currentFrameIndex = frameIndex + 3;

    requestAnimationFrame(this.renderScrollCard);
  }

  renderScrollCard(): void {
    if (!this.canvas) return;
    if (!this.context) return;
    let image: HTMLImageElement = document.createElement("img");
    image.onload = () => {
      this.context?.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
      this.context?.drawImage(
        image,
        0,
        0,
        this.canvas!.width,
        this.canvas!.height
      );
    };
    image.src = this.currentFrame(this.currentFrameIndex);
  }

  currentFrame(index: number): string {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, "0")}.jpg`;
  }
}
</script>

<style lang="sass" scoped>
.content
  min-height: 200vh

.content-body
  margin-top: -100vh

.canvas
  position: sticky
  top: 0
  left: 0
  width: 100%
  height: 100vh
  z-index: -1
</style>
