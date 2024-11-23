import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { umamiAnalyticsPlugin } from "@vuepress/plugin-umami-analytics";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "锦衣",
  description: "锦衣小窝",
  theme,
  plugins: [
    // Umami Analytics 插件配置
    umamiAnalyticsPlugin({
      id: "3f15583b-b3bd-4810-805a-609a884c634a",  
      link: "https://umami-beta-lac.vercel.app/script.js",  
      autoTrack: true,
      cache: true,
      hostUrl: 'https://umami-beta-lac.vercel.app',
    }),

    // 搜索插件
    searchProPlugin({
      indexContent: true,
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  themeConfig: {
    blog: {
      filter: ({ frontmatter }) => frontmatter.category === "posts",
    },
    footer: ``,
  },
  head: [
    // 添加 jQuery 脚本
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js",
        async: true,
      },
    ],
    // 添加 Font Awesome 样式
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css",
      },
    ],
    // 添加 Live2D 小部件脚本
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js",
        async: true,
      },
    ],
    // 引入 base.scss 文件
    [
      "link",
      {
        rel: "stylesheet/scss",
        href: "/.vuepress/styles/base.css", // 确保这个路径正确
      },
    ],
  ],
});




