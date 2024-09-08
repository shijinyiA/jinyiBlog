import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/jinyiBlog/",
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
    [
      'style',
      {},
      `
        /* CSS 来隐藏主页上的文章内容 */
        .home .post-preview .post-content {
          display: none;
        }

        /* 设置博客主页的背景图片 */
        .blog-home {
          background-image: url(/assets/images/bj.jpg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
        }
      `,
    ],
    [
      'script',
      {},
      `
        /* 鼠标特效 */
        var a_idx = 0;
        document.addEventListener('DOMContentLoaded', function() {
          document.body.addEventListener('click', function(e) {
            var a = new Array("锦衣");
            var $i = document.createElement('span');
            $i.textContent = a[a_idx];
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.style.zIndex = 9999999999;
            $i.style.top = (y - 20) + 'px';
            $i.style.left = x + 'px';
            $i.style.position = 'absolute';
            $i.style.fontWeight = 'bold';
            $i.style.color = '#ff6651';
            document.body.appendChild($i);
            $i.animate({
              top: (y - 180) + 'px',
              opacity: 0
            }, {
              duration: 1500,
              easing: 'ease',
              complete: function() {
                $i.remove();
              }
            });
          });
        });
      `,
    ],
  ],
});

