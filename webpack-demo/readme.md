## 起步
    Node 8.2+ 版本提供的 npx 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件（./node_modules/.bin/webpack
    如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。
    通过向 npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack，例如：npm run build -- --colors。

    作业：
        自定义参数传递给 webpack
        多入口 和 不同出口 代码分离

## 管理资源
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

## 管理输出
    输出bundle
        根据入口起点名称动态生成 bundle 名称
    设定 HtmlWebpackPlugin
        熟悉 HtmlWebpackPlugin 仓库 你还可以看一下 html-webpack-template，除了默认模板之外，还提供了一些额外的功能。
    清理 /dist 文件夹





