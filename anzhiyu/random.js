var posts=["2025/05/06/hello-world/","2025/05/20/notion_articles/到底行不行呢/","2025/05/20/notion_articles/Untitled/","2025/05/19/notion_articles/1f2b8267-ea92-80a3-a01f-c31701dabd1a/","2025/05/14/notion_articles/测试的文章-2025-05-14/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };