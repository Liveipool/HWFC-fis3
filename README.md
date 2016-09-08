# HWFC
## HWFC官方网站

使用fis3+vue.js+node.js+mongodb进行构建

## 项目说明
1. 必须使用6.0以上的nodejs；
2. 开发时的media为默认的dev，此时所有文件均不添加文件指纹，也不进行压缩优化；
3. 发布时的media为production，此时为文件添加文件指纹，进行压缩优化等；
4. 前端文件一律放在client文件下，里面有images,scripts,styles和templates四个文件夹，分别放置图片，js，css和jade文件。**注意：开发者自己添加的jade文件必须放在templates/parts目录下**；

## 运行方法
1. npm install　安装依赖包；
2. fis3 release
3. fis3 server start
