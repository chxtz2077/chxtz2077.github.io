var posts=["2025/05/06/hello-world/","2025/05/14/notion_articles/测试的文章-2025-05-14/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };