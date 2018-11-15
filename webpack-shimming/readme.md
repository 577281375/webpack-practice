## shimming     全局变量用例
    使用 ProvidePlugin 后，能够在通过 webpack 编译的每个模块中，通过访问一个变量来获取到 package 包。如果 webpack 知道这个变量在某个模块中被使用了，那么 webpack 将在最终 bundle 中引入我们给定的 package。让我们先移除 lodash 的 import 语句，并通过插件提供它


    场景： 我们只是使用 引用包里面的某一个方法
        我们还可以使用 ProvidePlugin 暴露某个模块中单个导出值，只需通过一个“数组路径”进行配置（例如 [module, child, ...children?]）。


    细粒度 shimming
        一些传统的模块依赖的 this 指向的是 window 对象。在接下来的用例中，调整我们的 index.js
    全局 exports

    加载 polyfills
        polyfills 虽然是一种模块引入方式，但是并不推荐在主 bundle 中引入 polyfills，因为这不利于具备这些模块功能的现代浏览器用户，会使他们下载体积很大、但却不需要的脚本文件
        可以判断浏览器是否需要 然后再手动引入 在入口文件处加上代码就可以了 判断是否需要动态生成标签
        whatwg-fetch fecth npm包

    深度优化

    question
        require.resolve example :  https://github.com/webpack/webpack/tree/master/examples/require.resolve
        path.resolve path.resolve（）方法将一系列路径或路径段解析为绝对路径

        imports-loader   imports-loader?this=>window 会把函数 用bind  绑定this 这样就会把引入全部包在里面  不符合规范 然后报错  放弃放弃  可以考虑用 alias来解决  以后不用这个loader了
        Module build failed (from ./node_modules/babel-loader/lib/index.js):
        SyntaxError: /Users/songxue/Desktop/practice/webpack/webpack-practice/webpack-shimming/src/index.js: 'import' and 'export' may only appear at the top level (4:0)


        loader plugin的区别
        对于loader，它就是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss或A.less转变为B.css，单纯的文件转换过程；
        对于plugin，它就是一个扩展器，它丰富了wepack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点

## http-server 现在没有什么用 可以直接忽略

## typescript
    使用第三方库
        当从 npm 安装第三方库时，一定要牢记同时安装这个库的类型声明文件。你可以从 TypeSearch 中找到并安装这些第三方库的类型声明文件 我搜啦一下  大多都是关于ts的生命文件
        搜索类库包链接
        https://microsoft.github.io/TypeSearch/
    导入其他资源
        创建 custom.d.ts 文件  编写自定义类型声明
        将 .svg 文件进行声明
        demo:
            declare module "*.svg" {
                const content: any;
                export default content;
            }

## 使用环境变量 这个非常重要
    命令行环境配置中，通过设置 --env 可以使你根据需要，传入尽可能多的环境变量。在 webpack.config.js 文件中可以访问到这些环境变量。

    脚本命令行
    "start": "NODE_ENV=development login_env='staging-' webpack-dev-server  --env.SERVICE_URL='http://development-SERVICE_URL.com' --inline  --config ./webpack.config.js --progress"
    收获有点大
    文档现在推荐的是 使用 DefinePlugin 把环境配置 就可以在外部文件获取 类似全局变量
    https://www.webpackjs.com/api/cli/#%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%9A%84%E7%94%A8%E6%B3%95
    环境变量配置方式
    npm命令行脚本里添加变量
         NODE_ENV=development login_env='staging-' process.env.NODE_ENV  process.env.login_env  这个属于node内置模块process.env 只可以在webpack.config里获取
    --env 在脚本命令行配置
        当配置文件是一个函数时，会将环境变量传给这个函数 可以通过对象直接获取 环境变量
    DefinePlugin插件 可以讲这些环境变量 变为全局变量 在任何地方使用




