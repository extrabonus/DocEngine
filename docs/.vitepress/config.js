import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  title: 'Jakei',
  outDir: path.resolve(__dirname, '../../dist'),
  base: '/DocEngine/',
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
            },
            { 
              text: '文件',
              collapsed: true,
              items: [
                { text: '文件操作', link: '/Toolchain/Python/file.html' },
                { text: '路径读取', link: '/Toolchain/Python/path.html' }
              ]
            },
            { 
              text: '类与对象',
              collapsed: true,
              items: [
                { text: '基础概念', link: '/Toolchain/Python/class/basic.html' },
                { text: '魔法方法', link: '/Toolchain/Python/class/magic.html' }
              ]
            },
            { 
              text: '最佳实践',
              collapsed: true,
              items: [
                { text: '字符串', link: '/Toolchain/Python/practice/str_lesson.html' },
                { text: '列表', link: '/Toolchain/Python/practice/list_lesson.html' },
                { text: '字典', link: '/Toolchain/Python/practice/dict_lesson.html' },
                { text: '函数', link: '/Toolchain/Python/practice/func_lesson.html' },
                { text: '文件', link: '/Toolchain/Python/practice/file_lesson.html' }
              ]
            },
            { text: '常见问题', link: '/Toolchain/Python/faq.html' }
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