webpackJsonp([43914031715392],{381:function(t,n){t.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E6%B5%81%E7%A8%8B">流程</a></li>\n<li><a href="#fetch">fetch</a></li>\n<li><a href="#checkout">checkout</a></li>\n</ul>',internal:{content:'---\ntitle: Git多人合作開發工作流程\ndate: 2017-04-01 22:22\ntags:\n  - Git\n---\n\n## 流程\n1. `git fetch` 確認遠端數據庫的內容\n1. `git checkout dev` 從現有支線轉到開發支線\n1. `git pull` 下載遠端數據庫到本地\n1. 永遠使用`git pull`之後才使用`git push`\n1. `git commit -m "Message"` 很實用。。。\n1. `git checkout -b "New Branch"` 可以直接開新支線，並切換到那條支線上\n1. `git push origin "updated-branch"` 就可以推上去遠端數據庫\n\n## fetch\n使用`fetch`指令可以避免更改本地數據庫，同時更新其他人更新遠端數據庫後的內容。\n\n## checkout\n`checkout`切換本地數據庫支線，正常情況下應該建立超過兩條支線，比如說`master`只用作發佈更新版本，`dev`用作開發。\n\n個人開發項目和與他人一同開發項目是兩回事來的。。。\n'},frontmatter:{title:"Git多人合作開發工作流程"}}},pathContext:{slug:"/git-workflow/"}}}});
//# sourceMappingURL=path---2017-04-01-git-workflow-a8935ff84098af3b3777.js.map