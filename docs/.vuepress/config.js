
module.exports = {
  base: '/',
  title: "bonnie's blog",
  description: "This is bonnie's blog to write something about technology.",
  themeConfig: {
      // 你的GitHub仓库，请正确填写
      repo: 'https://bonnielai.github.io/',
      // 自定义仓库链接文字。
      repoLabel: 'My GitHub',
      nav: [
          { text: 'Home', link: '/' },
          { text: 'FirstBlog', link: '/blog/20200406.md' }
      ],
      sidebar: [
        ['/', '首页'],
        ['/blog/20200406.md', '我的第一篇博客']
      ]
  }

}