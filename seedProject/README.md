# 种子工程

* 将js文件build到`build`目录下。
* 修改`systemjs.config.js`文件，加入`build`目录
* 修改`index.html`文件，加入`build`目录
* 修改`karma.conf.js`文件，加入`build`目录（`appBase`，`appAssets`变量）
* 修改`karma-test-shim.js`文件，加入`build`目录（builtPath变量）
* 去掉无用的ignore内容
* 去掉暂时不用的script命令