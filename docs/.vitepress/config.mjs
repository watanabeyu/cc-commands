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
            { text: 'Issue Update', link: '/commands/issue-update' },
            { text: 'PR Create', link: '/commands/pr-create' },
            { text: 'PR Update', link: '/commands/pr-update' },
            { text: 'PR Review Fix', link: '/commands/pr-review-fix' }
          ]},
          { text: 'Requirements', items: [
            { text: 'Req Assistant', link: '/commands/req-assistant' }
          ]},
          { text: 'Search', items: [
            { text: 'Gemini Search', link: '/commands/gemini-search' }
          ]}
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/watanabeyu/cc-commands' }
    ]
  }
})