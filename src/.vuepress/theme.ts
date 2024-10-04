import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://jinyi.icu",

  author: {
    name: "锦衣",
    url: "https://github.com/shijinyiA/jinyiBlog",
  },

  iconAssets: "fontawesome-with-brands",
  logo: "/assets/images/tx.jpg",
  repo: "shijinyiA/jinyiBlog",
  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: `
    <div>
      <a href="https://icp.gov.moe/?keyword=20240172" target="_blank">萌ICP备20240172号</a>
    </div>
  `,
  displayFooter: true,

  // 博客相关
  blog: {
    description: "二次元游戏爱好者，喜欢FPS",
    intro: "/about",
    medias: {
      BiliBili: "https://space.bilibili.com/483398190",
      GitHub: "https://github.com/shijinyiA",
      Steam: "https://steamcommunity.com/id/fengyuanwanyejinyi/",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页（帮助更改最好啦！！）",
  },

  // 启用的插件
  plugins: {
    // 在这里配置主题提供的插件

    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    comment: {
      provider: "Giscus",
      repo: "shijinyiA/jinyiBlog",
      repoId: "R_kgDOMuaHtw",
      category: "Announcements",
      categoryId: "DIC_kwDOMuaHt84CiSve",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    blog: true, // 将博客插件放在这里，避免重复定义
  },

  // Markdown 增强插件配置
  mdEnhance: {
    align: true,
    attrs: true,
    codetabs: true,
    component: true,
    demo: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },
}); // 移除了分号，并且保持对象结束后的闭合括号
