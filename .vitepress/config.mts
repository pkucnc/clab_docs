import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "zh-CN",
  title: "PKU Clab 文档",
  description: "开箱即用的免费云计算服务，为教学与科研服务。",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  base: '/docs',
  cleanUrls: true,
  themeConfig: {
    i18nRouting: false,
    logo: "/logo.svg",
    logoLink: '/docs/getting-started/introduction',
    nav: [
      { text: 'PKU Clab', link: 'https://clab.pku.edu.cn', target: '_self'},
      { text: '文档', link: '/getting-started/introduction', activeMatch: '/' },

    ],
    sidebar: {
      '/': [
        {
          text: '文档',
          items: [
            { text: '快速开始', link: '/getting-started/introduction' },
            { text: '网络', items: [
              { text: "自组网", link: '/networking/private-network'},
              { text: "Router和浮动IP", link: '/networking/router-and-floating-ip'},
              { text: "安全组", link: '/networking/security-group'}
              ] 
            },
            { text: '储存', items: [
              { text: "Volume类型", link: '/storage/volume-type'},
              { text: "Volume快照和备份", link: '/storage/volume-snapshots-and-backups'},
              ] 
            },
            { text: '镜像站使用指南', link: '/getting-started/lcpu-mirror' }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lcpu-club' }
    ],
    footer: {
      message: '由北京大学学生 Linux 俱乐部开发并维护',
      copyright: '© 2024 LCPU Club'
    },
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
        forceLocale: true
      }
    },
    editLink: {
      pattern: 'https://github.com/lcpu-club/clab-docs/edit/main/:path',
      text: '在GitHub上更新本页'
    },
    darkModeSwitchLabel: "颜色选择",
    lightModeSwitchTitle: "切换至亮色模式",
    darkModeSwitchTitle: "切换至暗色模式", 
    sidebarMenuLabel: "目录",
    returnToTopLabel: "回到顶部",
    externalLinkIcon: true,
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
