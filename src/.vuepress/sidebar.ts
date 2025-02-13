import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Markdown教程",
      icon: "book",
      prefix: "/",
      children: [
        "md",   
        "mdnext" 
      ],
    },
    "bz",
    "about",
    "shell",
  ],
});

