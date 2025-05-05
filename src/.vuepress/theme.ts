import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://jinyi.icu",

  author: {
    name: "",
    url: "https://github.com/shijinyiA/jinyiBlog",
  },

  iconAssets: "fontawesome-with-brands",
  logo: "http://q2.qlogo.cn/headimg_dl?dst_uin=3022056965&spec=100",
  repo: "shijinyiA/shijinyiA",
  docsDir: "",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 自定义页脚
  footer: `
    <div>
      <span>Copyright © 2024-至今 锦衣 保留一切解释权利</span><br>
    </div>
  `,
  displayFooter: true,

  // 博客相关
  blog: {
    name: "锦衣",
    description: "二次元游戏爱好者，喜欢FPS",
    intro: "/about",
    medias: {
      BiliBili: "https://space.bilibili.com/483398190",
      GitHub: "https://github.com/shijinyiA",
      Steam: "https://steamcommunity.com/id/fengyuanwanyejinyi/",
      QQ: "https://tenapi.cn/v2/qqcard?qq=3022056965",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {},
  editLink: false,

  // 启用的插件
  plugins: {
    // 评论插件
    comment: {
      provider: "Waline",
      serverURL: "https://pl.ysjinyi.com/", 
    },

    // 博客插件
    blog: true,

    // 启用 SiteInfo 组件
    components: {
      components: [
        "SiteInfo", // 启用 SiteInfo 组件
      ],
    },
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
});
