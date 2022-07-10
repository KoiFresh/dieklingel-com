const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // custom domainname dieklingel.de
    // ? '/dieklingel-homepage/' // github pages
    : '/',
  //outputDir: 'docs',
  transpileDependencies: true,
});
