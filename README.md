# 一个简单的组件库练习
> 主要文件 在于 package.json 和 src并列的 index.js 文件<br>
> 使用 vue-express 生成用例
### 

##  package.json
> 特别注意 main 文件 是入口文件 <br>
> build 命令 --target lib 生成一个 lib 包 -- name Tsk是文件前缀 --dest dist 打包后的文件夹名称 index.js 打包的文件入口

```json
 {
  "name": "tskt1",
  "version": "0.1.1",
  "private": false,
  "author": "TSk",
  "main": "dist/Tsk.umd.min.js",
  "scripts": {
    "dev": "vue-cli-service serve",
    "build": "vue-cli-service build --target lib --name Tsk -dest dist index.js"
  }
 }
```

## vue-express 