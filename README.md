# SDK's Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/70920cac-64c3-44fb-89ec-fb4978521bfc/deploy-status)](https://app.netlify.com/sites/vibrant-borg-871707/deploys)

[GatsbyJS](https://www.gatsbyjs.com/)를 사용하여 개발되었으며, [Netlify](https://www.netlify.com/)로 빌드&배포 됩니다.

원본 소스는 [blog](https://github.com/siner308/blog)입니다. 
저장소는 [blog-posts](https://github.com/sundoforce/blog-posts)입니다.

git submodule add github.com/sundoforce/blog-posts  
git submodule add github.com/sundoforce/aboutme

git rm --cached aboutme 

# markdown metadata
- title: 글의 제목 (required)
- subtitle: 글의 부제목 (optional)
- date: 작성일 (required)
- tags: 카테고리 분류를 위한 태그입니다. (optional)
- draft: `draft: true`로 해두면 유저페이지에서 보이지 않습니다. default값은 false입니다. (optional) 
- image: 메인페이지에서 보여지는 썸네일 (optional)
