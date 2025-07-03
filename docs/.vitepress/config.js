import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Claude Code Commands',
  description: 'Collection of custom commands for Claude Code',
  base: '/cc-commands/',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Commands', link: '/commands/' }
    ],
    
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/' },
          { text: 'About', link: '/about' }
        ]
      },
      {
        text: 'Commands',
        items: [
          { text: 'Overview', link: '/commands/' },
          { text: 'Installation', link: '/commands/installation' },
          { text: 'Usage', link: '/commands/usage' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/watanabeyu/cc-commands' }
    ]
  }
})