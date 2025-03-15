import { defineConfig } from 'vitepress'
export default {
  base: '/DocEngine/',
  title: 'Jakei',
  themeConfig: {
    outline:{
      level:[2,3],
      label:"Contents"
    },
    search: {
      provider: 'local' // 或配置 algolia 搜索
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Artifacts', link: '/Artifacts/' },
      { text: 'Toolchain', link: '/Toolchain/' },
      { text: 'Insights', link: '/Insights/' }
    ],
    sidebar: {
      'Artifacts': [
        { text: '技能介绍', link: '/Artifacts/index' },
        { text: '技术图谱', link: '/Artifacts/123' }
      ],
      'Toolchain': [
          {
            'items':[
              { text: 'Markdown', 
                link: '/Toolchain/Markdown', 
              },
              { text: 'Git', 
                link: '/Toolchain/Git',
              },
              { text: 'Linux', 
                link: '/Toolchain/Linux',
              },
              { text: 'Postman', 
                link: '/Toolchain/Postman', 
              },
              { text: 'Python', 
                collapsed: true, 
                items: [
                      {
                        text: '基础语法', 
                        link: '/Toolchain/Python/index',
                      },
                      {
                        text: '字符串', 
                        link: '/Toolchain/Python/str',
                      },
                      {
                        text: '列表', 
                        link: '/Toolchain/Python/list',
                      },
                      {
                        text: '元组', 
                        link: '/Toolchain/Python/tuple',
                      },
                      {
                        text: '序列', 
                        link: '/Toolchain/Python/sequence',
                      },
                      {
                        text: '字典', 
                        link: '/Toolchain/Python/dict',
                      },
                      {
                        text: '集合', 
                        link: '/Toolchain/Python/set',
                      },
                      {
                        text: '函数', 
                        collapsed: true, 
                        items:[
                          {
                          text: '基础用法', 
                          link: '/Toolchain/python/function/basic',
                          },
                          {
                            text: '高阶用法', 
                            link: '/Toolchain/python/function/advance',
                          },
                          {
                            text: '内置函数', 
                            link: '/Toolchain/python/function/defined',
                          },
                          {
                            text: '类型注释', 
                            link: '/Toolchain/python/function/annotation',
                          },
                        ]
                      },
                      {
                        text: '文件', 
                        collapsed: true, 
                        items:[
                          {
                          text: '文件操作', 
                          link: '/Toolchain/Python/file',
                          },
                          {
                            text: '路径读取', 
                            link: '/Toolchain/Python/path',
                          },
                        ]
                      },
                      {
                        text: '类与对象', 
                        collapsed: true, 
                        items:[
                          {
                          text: '基础概念', 
                          link: '/Toolchain/Python/class/basic',
                          },
                          {
                            text: '魔法方法', 
                            link: '/Toolchain/Python/class/magic',
                          },
                        ]
                      },
                      {
                        text: '最佳实践', 
                        collapsed: true, 
                        items:[
                          {
                          text: '字符串', 
                          link: '/Toolchain/python/practice/str_lesson',
                          },
                          {
                            text: '列表', 
                            link: '/Toolchain/python/practice/list_lesson',
                          },
                          {
                            text: '字典', 
                            link: '/Toolchain/python/practice/dict_lesson',
                          },
                          {
                            text: '函数', 
                            link: '/Toolchain/python/practice/func_lesson',
                          },
                          {
                            text: '文件', 
                            link: '/Toolchain/python/practice/file_lesson',
                          },
                        ]
                      },
                      {
                        text: '常见问题', 
                        link: '/Toolchain/Python/faq',
                      },
                    ]
              },           
            ]
          }
      ],
      'Insights': [
        { text: '当信息过载遭遇AI革命', 
          link: '/Insights/Infoverload',
        },
        { text: '项目案例', 
          link: '/Insights/789',
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
}