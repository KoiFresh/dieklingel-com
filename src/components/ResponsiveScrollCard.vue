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
  private toImg = 0;
  private image: HTMLImageElement = new Image();
  private failsToLoadInTime = 0;
  private loadInTime = 0;

  private imageSrcs: string[] = [];

  mounted(): void {
    this.toImg = this.to;
    this.image.src = this.fallback;

    for (let i = this.from; i < this.to; i++) {
      const index: string = i.toString().padStart(this.padStart, "0");
      const path: string = this.path.replace(":id:", index);
      this.imageSrcs.push(path);
    }

    this.currentFrameIndex = this.from;

    this.canvas = this.$refs.canvas as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.content = this.$refs.content as HTMLDivElement;

    this.resizeListener();
    requestAnimationFrame(this.renderScrollCard);
    window.addEventListener("scroll", this.scrollListener);
    window.addEventListener("resize", this.resizeListener);
  }

  unmounted(): void {
    window.removeEventListener("scroll", this.scrollListener);
    window.removeEventListener("resize", this.resizeListener);
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
    this.currentFrameIndex = Math.min(frameIndex, this.imageSrcs.length - 1);

    requestAnimationFrame(this.renderScrollCard);
  }

  resizeListener(): void {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.getBoundingClientRect().width; // window.innerWidth;
    this.canvas.height = this.canvas.getBoundingClientRect().height; // window.innerHeight;
    requestAnimationFrame(this.drawBackground);
  }

  renderScrollCard(): void {
    if (!this.canvas) return;
    if (!this.context) return;

    const cancelTask = setTimeout(() => {
      this.image.onload = () => {
        this.drawBackground();
      };
      this.image.src = this.fallback;
      //this.drawBackground();
      this.failsToLoadInTime++;
    }, 60);

    this.image.onload = () => {
      clearTimeout(cancelTask);
      this.loadInTime++;
      this.drawBackground();
    };

    this.image.src =
      this.loadInTime / this.failsToLoadInTime > 3 / 1
        ? this.imageSrcs[this.currentFrameIndex]
        : this.fallback;
  }
  drawBackground(): void {
    let scale = Math.min(
      this.canvas!.width / this.image.width,
      this.canvas!.height / this.image.height
    );
    let x = this.canvas!.width / 2 - (this.image.width / 2) * scale;
    let y = this.canvas!.height / 2 - (this.image.height / 2) * scale;
    let width = this.image.width * scale;
    let height = this.image.height * scale;
    console.log(width);

    this.context?.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
    this.context?.drawImage(this.image, x, y, width, height);
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
