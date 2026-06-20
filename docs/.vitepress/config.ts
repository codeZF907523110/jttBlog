import { defineConfig } from "vitepress";

export default defineConfig({
  title: "贾甜甜的博客",
  description: "展示作者作品集的博客，作者是一名优秀的视觉设计师",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "作品集", link: "/works/" },
      { text: "相册", link: "/album/" },
      { text: "关于我", link: "/about/" },
      {
        text: "更多",
        items: [
          { text: "友链", link: "/friends/" },
          { text: "分享", link: "/share/" },
        ],
      },
    ],
    sidebar: [],
    socialLinks: [],
    footer: {
      message: "Made with 💖 and VitePress",
    },
  },
  vite: {
    server: {
      open: true,
    },
  },
});
