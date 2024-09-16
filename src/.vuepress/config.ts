import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "锦衣",
  description: "锦衣小窝",
  theme,
  plugins: [
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
    footer: `
      <div>
        <a href="https://icp.gov.moe/?keyword=20240172" target="_blank">萌ICP备20240172号</a>
      </div>
    `,
  },
  head: [
    // 添加 jQuery 脚本
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js',
        async: true,
      },
    ],
    // 添加 Font Awesome 样式
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css',
      },
    ],
    // 添加 Live2D 小部件脚本
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js',
        async: true,
      },
    ],
    // 添加 Giscus 评论系统脚本
    [
      'script',
      {},
      `
        document.addEventListener('DOMContentLoaded', function() {
          const giscusScript = document.createElement('script');
          giscusScript.src = 'https://giscus.app/client.js';
          giscusScript.async = true;
          giscusScript.crossOrigin = 'anonymous';
          giscusScript.setAttribute('data-repo', 'shijinyiA/jinyiBlog');
          giscusScript.setAttribute('data-repo-id', 'R_kgDOMuaHtw');
          giscusScript.setAttribute('data-category', 'General');
          giscusScript.setAttribute('data-category-id', 'DIC_kwDOMuaHt84CiSvf');
          giscusScript.setAttribute('data-mapping', 'pathname');
          giscusScript.setAttribute('data-strict', '0');
          giscusScript.setAttribute('data-reactions-enabled', '1');
          giscusScript.setAttribute('data-emit-metadata', '0');
          giscusScript.setAttribute('data-input-position', 'bottom');
          giscusScript.setAttribute('data-theme', 'preferred_color_scheme');
          giscusScript.setAttribute('data-lang', 'zh-CN');
          document.getElementById('giscus-container').appendChild(giscusScript);
        });
      `,
    ],
    // 添加自定义样式
    [
      'style',
      {},
      `
        /* CSS 来隐藏主页上的文章内容 */
        .home .post-preview .post-content {
          display: none;
        }
      `,
    ],
  ],
});

