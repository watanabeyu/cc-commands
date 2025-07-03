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
          { text: 'Code Analysis', items: [
            { text: 'Check Similarity', link: '/commands/check-similarity' }
          ]},
          { text: 'GitHub Integration', items: [
            { text: 'Issue Create', link: '/commands/issue-create' },
            { text: 'PR Create', link: '/commands/pr-create' }
          ]}
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/watanabeyu/cc-commands' }
    ]
  }
})