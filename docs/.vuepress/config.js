module.exports = {
  title: 'MEUI',
  description: 'MEUI组件开发文档',
  port: 3000,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    locales: {
      '/': {
        nav: [
          {
            text: '指南',
            link: '/guidebook/',
          },
          {
            text: '规范文档',
            link: '/config/',
          },
          {
            text: '组件文档',
            link: '/ui/',
          },
        ],
        sidebar: {
          '/guidebook/': genSidebarConfig('指南'),
          '/ui/': genSidebarComponents('组件'),
        },
      },
    },
  },
}

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [''],
    },
  ]
}
function genSidebarComponents(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['me-box'],
    },
  ]
}