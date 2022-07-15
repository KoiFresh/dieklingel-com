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
import { Prop } from "vue-property-decorator";

export default class ResponsiveScrollCard extends Vue {
  @Prop({ default: "" }) readonly path!: string;
  @Prop({ default: "" }) readonly fallback!: string;
  @Prop({ default: 0 }) readonly from!: number;
  @Prop({ default: 0 }) readonly to!: number;
  @Prop({ default: 4 }) readonly padStart!: number;

  private currentFrameIndex = 1;
  private canvas: HTMLCanvasElement | undefined;
  private context: CanvasRenderingContext2D | null | undefined;
  private content: HTMLDivElement | undefined;
  private images: HTMLImageElement[] = [];
  private fallbackImage: HTMLImageElement | undefined;
  private loaded = false;
  private toImg = 0;

  mounted(): void {
    this.toImg = this.to;
    this.loadFallback();
    //this.loadImages();

    this.currentFrameIndex = this.from;

    this.canvas = this.$refs.canvas as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.content = this.$refs.content as HTMLDivElement;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //requestAnimationFrame(this.renderScrollCard);
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

    const pixelPerFrame = maxScrollTop / this.toImg - this.from;
    const frameIndex = Math.floor(scrollTop / pixelPerFrame);
    this.currentFrameIndex = Math.min(frameIndex, this.images.length - 1);

    requestAnimationFrame(this.renderScrollCard);
  }

  renderScrollCard(): void {
    if (!this.canvas) return;
    if (!this.context) return;
    this.context?.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
    let index = this.loaded ? this.currentFrameIndex : 0;

    let img = this.images[index];
    let scale = Math.min(
      this.canvas.width / img.width,
      this.canvas.height / img.height
    );
    let x = this.canvas.width / 2 - (img.width / 2) * scale;
    let y = this.canvas.height / 2 - (img.height / 2) * scale;
    let width = img.width * scale;
    let height = img.height * scale;

    this.context?.drawImage(img, x, y, width, height);
  }

  loadFallback(): void {
    const start = new Date().getTime();
    let path = this.fallback.replace("@/assets", "");
    const img = new Image();
    img.onload = () => {
      const end = new Date().getTime();
      const duration = end - start;
      if (duration < 500) {
        console.log(duration);
        this.loadImages();
      } else {
        this.images.push(img);
        this.toImg = this.from;
      }
      requestAnimationFrame(this.renderScrollCard);
    };

    img.src = require("@/assets" + path);
  }

  loadImages(): void {
    let imagesLoaded = 0;
    for (let i: number = this.from; i <= this.to; i++) {
      const num: string = i.toString().padStart(this.padStart, "0");
      const image = document.createElement("img");
      let p: string = this.path.replace(":id:", num).replace("@/assets", "");
      image.onload = () => {
        imagesLoaded++;
        if (imagesLoaded >= this.to - this.from) {
          this.loaded = true;
          requestAnimationFrame(this.renderScrollCard);
        }
      };
      setTimeout(() => {
        image.src = require("@/assets" + p);
      }, 0);
      this.images.push(image);
    }
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
