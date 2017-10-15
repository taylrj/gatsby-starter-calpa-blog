webpackJsonp([0xd0fc7b6deda1],{371:function(e,n){e.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li>\n<p><a href="#storage">Storage</a></p>\n<ul>\n<li><a href="#localstorage">localStorage</a></li>\n<li><a href="#sessionstorage">sessionStorage</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#%E6%96%B9%E6%B3%95">方法</a></p>\n<ul>\n<li><a href="#%E5%84%B2%E5%AD%98">儲存</a></li>\n<li><a href="#%E7%8D%B2%E5%8F%96">獲取</a></li>\n<li><a href="#%E6%B8%85%E9%99%A4">清除</a></li>\n</ul>\n</li>\n<li><a href="#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99">參考資料</a></li>\n</ul>',internal:{content:'---\ntitle: 利用JavaScript創建Web Storage\ndate: 2017-01-20 19:37:38\ntags:\n  - Web\n  - JavaScript\n---\n\n\n# Storage\n* HTML5 的 **Web Storage** 包括了兩種儲存方式：**localStorage**及**sessionStorage**。\n* 儲存在Storage中的資料，以key-value pair的形式保存。\n* Cookie的佔用空間非常小，大小限制于4KB左右，常見的用途是保存賬號登錄信息與登錄狀態。\n* 使用Storage物件時，可以寫`localStorage`代替`window.localStorage`。\n\n## localStorage\n即使用戶關閉瀏覽器，頁面數據依然存在。下一次用戶打開該頁面，便能夠使用該資料。舉個例子，當localStorage擁有userdata，瀏覽器可以獲取用戶資料，瀏覽器會導航用戶到登入後的畫面。\n\n```[js]\nif (localStorage.getItem(\'userdata\')) {\n  login();\n} else {\n  register();\n}\n```\n\n## sessionStorage\nsessionStorage與localStorage相似，但如果用戶關閉當前頁面，sessionStorage中的數據就會被清空。\n\n```[js]\nwindow.sessionStorage.setItem("username", "calpa");\nwindow.sessionStorage.getItem("username"); // calpa\n```\n\n# 方法\n## 儲存\n儲存資料的時候，可以利用Storage物件內的`setItem()`方法。\n```[js]\nlocalStorage.setItem(3, 3);\nsessionStorage.setItem("username", "calpa");\n```\n\n## 獲取\n獲取資料的時候，則會用到`getItem()`方法。\n```[js]\nlet username = localStorage.getItem("username");\n```\n\n如果key不是string的話，獲取資料時會出現問題。\n```[js]\nlocalStorage.3 = 3; // Uncaught SyntaxError: Unexpected number\n```\n\n## 清除\n清除某個資料，可以用`removeItem()`\n```[js]\nwindow.localStorage.removeItem("username");\n```\n\n清除所有資料，可以用`clear()`\n```[js]\nwindow.localStorage.clear();\nwindow.sessionStorage.clear();\n```\n\n# 參考資料\n1. [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)\n'},frontmatter:{title:"利用JavaScript創建Web Storage"}}},pathContext:{slug:"/using-javascript-to-create-web-storage/"}}}});
//# sourceMappingURL=path---2017-01-21-using-javascript-to-create-web-storage-c57697cc947a81750b94.js.map