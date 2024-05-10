var posts=["2024/05/10/hello-world/","2024/05/10/text1/","2024/05/10/page/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };