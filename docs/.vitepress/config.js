import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  title: 'Jakei',
  outDir: path.resolve(__dirname, '../../dist'),
  base: '/DocEngine/',  // 必须与仓库名一致
  vite: {
    build: {
      assetsDir: './'  // 确保静态资源路径正确
    }
  },
  cleanUrls: false,
  ignoreDeadLinks: true,  // 忽略死链接检查
  head: [
    ['link', { rel: 'stylesheet', href: '/DocEngine/assets/style.css' }]
  ],
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
        { text: '文档标准规范', 
          collapsed:true,
          items:[
            { text: '文档规范', link: '/Artifacts/Info.html'},
            { text: '文档格式', link: '/Artifacts/Form.html'},            
            { text: '产品文档体系', link: '/Artifacts/productDoc.html'},
            { text: '技术文档体系', link: '/Artifacts/tecDoc.html'},
          ]
        },
        // { text: '硬件安装手册', link: '/Artifacts/HardwareInstalManual.html' },
        // { text: '硬件用户手册', link: '/Artifacts/123' },
        // { text: '软件操作手册', link: '/Artifacts/123' }
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
        // { 
        //   text: '当信息过载遭遇AI革命', 
        //   link: '/Insights/Infoverload.html'
        // },
        // { 
        //   text: '项目案例', 
        //   link: '/Insights/789.html'
        // }
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