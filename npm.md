# npm
###  什么是npm?

npm(node packager manager) node包管理器

### npm常用命令

    npm view <包名> versions 查看所有版本号
    npm view <包名> version  查看最新版本号

    npm search <包名> 发布npm包验证包是否存在
    
    npm root -g 查看全局下载包的路径

---

### 下载
一.本地下载

    1.安装本地开发依赖 --save-dev或-D
    
      (1).下载到devDependencies

    2.安装本地线上依赖 --save或-S
    
      (1).下载到dependencies

二.全局下载

    1.安装全局  -g

### 更新
    
    npm update -D/-S

### 卸载

    1.本地卸载  npm uninstall <包名>
    
      (1).卸载本地开发依赖 -D
      
      (2).卸载本地线上依赖 -S

    2.全局卸载  npm uninstall <包名> -g

---

### 如何生成package.json(包描述文件)
    npm init
    
    npm -y(快速生成)
    
    
```
{
  "name": "li-package", 名字
  "version": "1.0.0",   版本号
  "description": "",    描述
  "main": "index.js",   入口文件
  "scripts": {
    "test": "echo \"Error: no test specified\" &&  exit 1"
  },                    脚本命令
  "author": "",         作者
  "license": "ISC"      许可证
}

```

---

### nodejs

    nodejs遵循commonjs规范
    
    commonjs规范:
    
        1.抛出模块:
            
            (1).module.exports 后者会覆盖前者 本身是对象
            
            (2). exports 是module.exports的别名  用属性来设置
        
        2.引入模块:require  默认找module.exports
        

---

### npm 包的找查规则

    require(模块标识) 
    
    模块标识：
    
    1.路径
    
        相对路径 ./  相对于所在文件夹
        
        绝对路径  /  磁盘的根目录
    
    2.包名
    
### 包名

---

node_modules文件的找查

    1.首先在当前文件夹下找---找不到--->一层一层找直到磁盘根目录---找不到--->全局路径(全局配置属性NODE_PATH)
    
    ==报错  Error:Cannot find module '包名'==
    
    (1).先找到对应的包文件夹->package.json  main字段  没有-->index.js
    
    ==报错  不是内部命令==
    
    解决办法:找执行文件所在目录配置全局环境的path下
    

### 设置镜像源(网站)

    国外: https://registry.npmjs.org/
    
    淘宝: https://registry.npm.taobao.org
    
>     npm config set registry  设置镜像源地址

>     npm config get registry  查看镜像源地址

---

### 下载包的步骤

    1)对应的镜像源查看是否存在执行包
    
    2)把指定的压缩包下载到指定的缓存目录下
    
        查看缓存目录:npm config get cache
        
    3)把压缩包解压到指定目录
    
        设置全局的解压目录:npm config set prefix <绝对路径>
        
        获取全局的解压目录:npm config get prefix
        

---

### 发包

    1.npm镜像源必须是国外的
    
    2.必须要有package.json文件  name名一定不能和现有的包名重复
    
    3.新建入口文件  编写功能
    
    4.npm login
    
    5.npm publish
    
    6.npm unpublish <包名>--force 强制卸载  在24小时发包可以删除