import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Advanced English 6th Edition",
  description: "A comprehensive English learning resource",
  
  bundler: viteBundler(),
  
  theme: hopeTheme({
    hostname: "https://advanced-en-6th.pages.dev",
    
    author: {
      name: "idkbungle",
      url: "https://github.com/idkbungle",
    },
    
    logo: "/logo.png",
    
    repo: "idkbungle/advanced-en-6th",
    
    docsDir: "docs",
    
    navbar: [
      "/",
      {
        text: "Units",
        icon: "book",
        prefix: "/units/",
        children: [
          {
            text: "Unit 1-6",
            children: [
              "unit1/",
              "unit2/", 
              "unit3/",
              "unit4/",
              "unit5/",
              "unit6/",
            ],
          },
          {
            text: "Unit 7-12",
            children: [
              "unit7/",
              "unit8/",
              "unit9/",
              "unit10/",
              "unit11/",
              "unit12/",
            ],
          },
        ],
      },
    ],
    
    sidebar: {
      "/units/": "structure",
    },
    
    footer: "Advanced English 6th Edition | Copyright © 2024 idkbungle",
    
    displayFooter: true,
    
    plugins: {
      blog: false,
      
      components: {
        components: ["Badge", "VPCard"],
      },
      
      icon: {
        assets: "fontawesome-with-brands",
      },
      
      mdEnhance: {
        align: true,
        tabs: true,
      },
    },
  }),
  
  shouldPrefetch: false,
}); 