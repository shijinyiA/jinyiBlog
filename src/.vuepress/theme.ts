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
    intro: "/intro.html",
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
    blog: true,
    components: {
      components: ["Badge", "VPCard"],
    },
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
  },
});
