# 使用

当gitbook做为其它页面的子页面嵌入时，在gitbook所在的iframe内切换文章时，并不会在父页面的url中反映出来，这将导致不能复制文章的url时总是会跳到这个gitbook的首页，极为不方便。

此插会利用history.pushState将iframe页面url更新到父页面的url

gitbook页面url为：

`http://localhost/xxx-gitbook/pageA.html`

则其父窗口的url会显示为：

`http://localhost/xxx-gitbook/pageA.html`
