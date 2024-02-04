const siteMetadata = {
  title: 'Data Quality INSIS Monitor',
  author: 'DTV Migration',
  headerTitle: 'Data Quality INSIS Monitor',
  description: 'Data Quality INSIS Monitor',
  snippets: '',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: '',
  siteRepo: '',
  siteLogo: '/static/images/logo.png',
  image: '',
  socialBanner: '',
  email: 'x',
  github: '',
  twitter: '_',
  linkedin: '',
  website: '',
  locale: 'en-US',
  newsletter: {
    provider: '', //e.g. emailOctopus
  },
  comment: {
    provider: '', //e.g. giscus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: '',
  },
}

module.exports = siteMetadata
