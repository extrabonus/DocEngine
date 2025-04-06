import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  title: 'Jakei',
  outDir: path.resolve(__dirname, '../../dist'),
  base: '/',
  cleanUrls: false, // 设置为 false 以使用 .html 后缀
  // head:[
  //   ['link', { rel: 'stylesheet', href: '/style.css' }]
  // ],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: "Contents"
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Artifacts', link: '/Artifacts/' },
      { text: 'Toolchain', link: '/Toolchain/' },
      { text: 'Insights', link: '/Insights/' }
    ],
    sidebar: {
      'Artifacts': [
        { text: '技能介绍', link: '/Artifacts/index.html' },
        { text: '技术图谱', link: '/Artifacts/123.html' }
      ],
      'Toolchain': [
        { text: 'Markdown', link: '/Toolchain/Markdown.html' },
        { text: 'Git', link: '/Toolchain/Git.html' },
        { text: 'Github pages', link: '/Toolchain/Gitpages.html' },
        { text: 'Linux', link: '/Toolchain/Linux.html' },
        { text: 'Postman', link: '/Toolchain/postman.html' },
        { 
          text: 'Python',
          collapsed: true,
          items: [
            { text: '基础语法', link: '/Toolchain/Python/index.html' },
            { text: '字符串', link: '/Toolchain/Python/str.html' },
            { text: '列表', link: '/Toolchain/Python/list.html' },
            { text: '元组', link: '/Toolchain/Python/tuple.html' },
            { text: '序列', link: '/Toolchain/Python/sequence.html' },
            { text: '字典', link: '/Toolchain/Python/dict.html' },
            { text: '集合', link: '/Toolchain/Python/set.html' },
            { 
              text: '函数',
              collapsed: true,
              items: [
                { text: '基础用法', link: '/Toolchain/Python/function/basic.html' },
                { text: '高阶用法', link: '/Toolchain/Python/function/advance.html' },
                { text: '内置函数', link: '/Toolchain/Python/function/defined.html' },
                { text: '类型注释', link: '/Toolchain/Python/function/annotation.html' }
              ]
            }
          ]
        }
      ],
      'Insights': [
        { 
          text: '当信息过载遭遇AI革命', 
          link: '/Insights/Infoverload.html'
        },
        { 
          text: '项目案例', 
          link: '/Insights/789.html'
        }
      ]
    }
  },
  vite: {
    server: {
      port: 5173,
      open: true
    }
  }
})