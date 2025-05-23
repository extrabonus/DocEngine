import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  title: 'Jakei',
  build: {
    outDir: '../dist'   //构建产物输出目录
  },
  base: '/DocEngine/',  // 必须与仓库名一致
  cleanUrls: false,
  ignoreDeadLinks: true,  // 忽略死链接检查
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
          link: '/Artifacts/Index',
          collapsed:true,
          items:[
            { text: '文档规范', link: '/Artifacts/Info'},
            { text: '文档格式', link: '/Artifacts/Form'},            
            { text: '产品文档体系', link: '/Artifacts/productDoc'},
            { text: '技术文档体系', link: '/Artifacts/tecDoc'},
          ]
        },
        // { text: '硬件安装手册', link: '/Artifacts/HardwareInstalManual' },
        // { text: '硬件用户手册', link: '/Artifacts/123' },
        // { text: '软件操作手册', link: '/Artifacts/123' }
      ],
      'Toolchain': [
        { text: 'Markdown', link: '/Toolchain/Markdown' },
        { text: 'Git', link: '/Toolchain/Git' },
        { text: 'Github pages', link: '/Toolchain/Gitpages' },
        { text: 'Linux', link: '/Toolchain/Linux' },
        // { text: 'Postman', link: '/Toolchain/postman' },
        { 
          text: 'Python',
          collapsed: true,
          items: [
            { text: '基础语法', link: '/Toolchain/Python/index' },
            { text: '字符串', link: '/Toolchain/Python/str' },
            { text: '列表', link: '/Toolchain/Python/list' },
            { text: '元组', link: '/Toolchain/Python/tuple' },
            { text: '序列', link: '/Toolchain/Python/sequence' },
            { text: '字典', link: '/Toolchain/Python/dict' },
            { text: '集合', link: '/Toolchain/Python/set' },
            { 
              text: '函数',
              collapsed: true,
              items: [
                { text: '基础用法', link: '/Toolchain/Python/function/basic' },
                { text: '高阶用法', link: '/Toolchain/Python/function/advance' },
                { text: '内置函数', link: '/Toolchain/Python/function/defined' },
                { text: '类型注释', link: '/Toolchain/Python/function/annotation' }
              ]
            },
            { 
              text: '文件',
              collapsed: true,
              items: [
                { text: '文件操作', link: '/Toolchain/Python/file' },
                { text: '路径读取', link: '/Toolchain/Python/path' }
              ]
            },
            { 
              text: '类与对象',
              collapsed: true,
              items: [
                { text: '基础概念', link: '/Toolchain/Python/class/basic' },
                { text: '魔法方法', link: '/Toolchain/Python/class/magic' }
              ]
            },
            { 
              text: '最佳实践',
              collapsed: true,
              items: [
                { text: '字符串', link: '/Toolchain/Python/practice/str_lesson' },
                { text: '列表', link: '/Toolchain/Python/practice/list_lesson' },
                { text: '字典', link: '/Toolchain/Python/practice/dict_lesson' },
                { text: '函数', link: '/Toolchain/Python/practice/func_lesson' },
                { text: '文件', link: '/Toolchain/Python/practice/file_lesson' }
              ]
            },
            { text: '常见问题', link: '/Toolchain/Python/faq' }
          ]
        }
      ],
      'Insights': [
        // { 
        //   text: '当信息过载遭遇AI革命', 
        //   link: '/Insights/Infoverload'
        // },
        // { 
        //   text: '项目案例', 
        //   link: '/Insights/789'
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