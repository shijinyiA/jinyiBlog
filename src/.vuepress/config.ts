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
    [
      'script',
      {
        src: 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js',
        async: true,
      },
    ],
    [
      'script',
      {},
      `
        document.addEventListener('DOMContentLoaded', function() {
          const giscusScript = document.createElement('script');
          giscusScript.src = 'https://giscus.app/client.js';
          giscusScript.async = true;
          giscusScript.crossOrigin = 'anonymous';
          giscusScript.setAttribute('data-repo', 'shijinyiA/jinyiBlog'); // 你的 GitHub 仓库名
          giscusScript.setAttribute('data-repo-id', 'R_kgDOMuaHtw'); // 仓库的唯一标识符
          giscusScript.setAttribute('data-category', 'General'); // 讨论分类
          giscusScript.setAttribute('data-category-id', 'DIC_kwDOMuaHt84CiSvf'); // 讨论分类 ID
          giscusScript.setAttribute('data-mapping', 'pathname'); // 映射方式
          giscusScript.setAttribute('data-strict', '0'); // 是否启用严格模式
          giscusScript.setAttribute('data-reactions-enabled', '1'); // 启用反应
          giscusScript.setAttribute('data-emit-metadata', '0'); // 是否发送元数据
          giscusScript.setAttribute('data-input-position', 'bottom'); // 评论输入框位置
          giscusScript.setAttribute('data-theme', 'preferred_color_scheme'); // 主题设置
          giscusScript.setAttribute('data-lang', 'zh-CN'); // 语言
          document.getElementById('giscus-container').appendChild(giscusScript);
        });
      `,
    ],
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
