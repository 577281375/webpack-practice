## 起步 get start
    Node 8.2+ 版本提供的 npx 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件（./node_modules/.bin/webpack
    如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。
    通过向 npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack，例如：npm run build -- --colors。

    作业：
        自定义参数传递给 webpack
        多入口 和 不同出口 代码分离

## 管理资源 Asset Management
    webpack 最出色的功能之一就是，除了 JavaScript，还可以通过 loader 引入任何其他类型的文件。可以用来构建网站或 web 应用程序中的所有非 JavaScript 内容。 css png jpg
    Module
            通过loader 对各种语言进行 转码成js代码块 包括 TypeScript ，ESNext (Babel) ， Sass ， Less ， Stylus
            在多数情况下，你也可以进行 CSS 分离，以便在生产环境中节省加载时间。最重要的是，现有的 loader 可以支持任何你可以想到的 CSS 处理器风格 - postcss, sass 和 less 等。
            加载css    style-loader css-loader
            加载图片    file-loader   把图片变成模块
            加载字体
            加载数据    可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML ----   csv-loader ,xml-loader
                       在使用 d3 等工具来实现某些数据可视化时，预加载数据会非常有用。我们可以不用再发送 ajax 请求，然后于运行时解析数据，而是在构建过程中将其提前载入并打包到模块中，以便浏览器加载模块后，可以立即从模块中解析数据。
            全局资源    资源与代码组合在一起，降低资源耦合度
                       - |- /assets
                       + |– /components
                       + |  |– /my-component
                       + |  |  |– index.jsx
                       + |  |  |– index.css
                       + |  |  |– icon.svg
                       + |  |  |– img.png

    作业
         代码分离
         CSS 分离 sass less postcss配置
         html-loader 使用
         压缩和优化你的图像。查看 image-webpack-loader 和 url-loader，以了解更多关于如果增强加载处理图片功能。
         使用 d3 等工具来实现数据可视化，完成预加载数据
         resolve.alias 别名管理全局资源

## 管理输出 Output Management
    输出bundle
        根据入口起点名称动态生成 bundle 名称
    设定 HtmlWebpackPlugin
        熟悉 HtmlWebpackPlugin 仓库 你还可以看一下 html-webpack-template，除了默认模板之外，还提供了一些额外的功能。
    清理 /dist 文件夹


    作业
        代码分离指南    https://www.webpackjs.com/guides/code-splitting/
        通过使用 WebpackManifestPlugin，可以直接将数据提取到一个 json 文件，以供使用。


## 开发 开发环境development
    source map
        追踪到错误和警告在源代码中的原始位置
    选择一个开发工具
        1.webpack's Watch Mode
        2.webpack-dev-server
        3.webpack-dev-middleware
    使用观察模式
        webpack's Watch Mode 在package.json里写脚本  webpack内置模块 watch
    使用 webpack-dev-server
        Webpack.NamedModulesPlugin 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境



    作业
        source map 有很多不同的选项可用，请务必仔细阅读它们，以便可以根据需要进行配置
        webpack-dev-server 带有许多可配置的选项。转到相关文档以了解更多。

## 模块热替换 Hot Module Replacement
    模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新
        1.保留在完全重新加载页面时丢失的应用程序状态
        2.只更新变更内容，以节省宝贵的开发时间
        3.调整样式更加快速 - 几乎相当于在浏览器调试器中更改样式
    HotModuleReplacementPlugin
        module.hot.accept
    问题
        代码刷新的了 但是原来的事件绑定并未删除  需要移除并绑定新的事件  解决问题可以用到 loader 完成这一功能
    HMR 修改样式表
        其他代码和框架
        React Hot Loader：实时调整 react 组件。
        Vue Loader：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。
        Redux HMR：无需 loader 或插件！只需对 main store 文件进行简单的修改。
    作业
        概念页面提供了更多关于它的工作原理以及为什么它有用的细节 https://www.webpackjs.com/concepts/hot-module-replacement/

## tree shaking 优化输出
    添加通用模块 删除费代码  按需引入
        1.可以在package.json 里配置 sideEffects false| []<string>
        2.可以在module.rules配置 sideEffects
        我们已经可以通过 import 和 export 语法，找出那些需要删除的“未使用代码(dead code)”
    压缩输出
        --optimize-minimize 标记webpack内部调用 uglifyPlugin

    作业
        --optimize-minimize 怎么用
        mode:{} 是什么模块

## 生产环境构建production
    开发环境(development)和生产环境(production) 目标差异 ————————————很重要  必须牢记 精髓！！！！
        在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置
    webpack-merge
        通过“通用”配置，我们不必在环境特定(environment-specific)的配置中重复代码
    webpack 生产开发环境分离
        webpack.dev.js      development 开发环境
        webpack.prod.js     production  生产环境
        webpack.common.js   常见配置
    Minification 代码压缩方面的插件
        BabelMinifyWebpackPlugin
        ClosureCompilerPlugin
    source map
        避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
    指定环境
        当使用 process.env.NODE_ENV === 'production' 时，一些 library 可能针对具体用户的环境进行代码优化，从而删除或添加一些重要代码。我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量

    作业
        (merge)的高级功能 了解
        bebel 的模块认知 https://www.jb51.net/article/135225.htm
        webpack的其他指令

## 此处碰到的问题
    一直build报错 ————————百度搜索还有google搜索都说是因为没有安装babel

    ERROR in app.bundle.js from UglifyJs
    Unexpected token: name (src_element) [app.bundle.js:17923,4]

    搜索谷歌的回答
    I have the same issue. I'm using babel-loader. It works great, I get compiled code from es6 to es5. But when I added Uglify plugin I got the error:
    SyntaxError: Unexpected token: name
    I understand that now Uglify can't parse es6, but Babel converts es6 to es5, why do I get error then?

    然后我去官网搜索  babelrc关于webpack的配置
    https://www.babeljs.cn/docs/setup/#installation
    报错
    babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'
    然后百度到解决办法 安装固定版本
    npm uninstall babel-loader
    npm install babel-loader@7.1.5

    success

    I get
    1.Uglify can't parse es6,
    2.报错就百度 ，找不到就 google  一定可以解决问题


##

