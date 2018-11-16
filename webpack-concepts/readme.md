## 概念
    ·入口(entry)
        webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的
    ·输出(output)
        webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件
    ·loader
        让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理
        在更高层面，在 webpack 的配置中 loader 有两个目标：
        1.test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
        2.use 属性，表示进行转换时，应该使用哪个 loader。
    ·插件(plugins)
        loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
    ·模式(mode)
        通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化




entry
    对象语法 是应用程序中定义入口的最可扩展的方式
    “可扩展的 webpack 配置”是指，可重用并且可以与其他配置组合使用。这是一种流行的技术，用于将关注点(concern)从环境(environment)、构建目标(build target)、运行时(runtime)中分离。然后使用专门的工具（如 webpack-merge）将它们合并。