## 搭建想法
    、、、
    功能特性 兼容特性性 可移植性 可扩展性  重复利用性 快速部署性
    你需要开发的项目 功能怎么做比较优雅  然后做完之后 能够在哪些平台 运行 ，代码能否重复利用（就是模块相互引用） ，然后运行时需要依赖什么  怎么部署
    可维护性  主要就是考虑 你代码的扩展性  代码的分包管理
    、、、

## 搭建过程
    > 环境构建
    、、、
    webpack.common.js 编写
    npm i webpack webpack-cli webpack-merge webpack-dev-server webpackbar html-webpack-plugin clean-webpack-plugin -D
    webpack webpack-cli 用脚手架搭建
    webpack-merge 可以将webpack模块合并
    webpack-dev-server hmr
    webpackbar 打包进度提示模块
    webpack-bundle-analyzer 打包优化插件
    html-webpack-plugin 生成html模版
    clean-webpack-plugin 清理没有引入的代码
    编写脚本语言
    "start": "webpack-dev-server --config  webpack/webpack.dev.js --inline --progress",
    "build": "webpack --config  webpack/webpack.pro.js --progress"

    webpack.dev.js 开发环境构建
    devtool 追踪错误和警告 我看umi配置 默认配置是 cheap-module-source-map 在网上看 说 cheap-module-eval-source-map利于开发 查看(https://www.cnblogs.com/chris-oil/p/8856020.html)
    webpack-bundle-analyzer 暂时放弃不用 等项目搭建起来了 在研究

    、、、

## 先从0到1  然后再去参考别人的代码 去优化
    踩坑 一直在弄这个传递参数的问题
    传递参数  说 在配置 全局变量的时候 如果要用到env对象 就必须返回一个函数  因为merge的结果是一个对象 所以一直找env对象的额时候是undefined  返回是一个对象  在merge函数中 把env对象传递下去 这才是正确的 这个需要增加分析能力  没有灵异事件  唯一的灵异事件就是 你的代码有问题 真理出奇迹

    分配好项目目录结构以后  就要想着 怎么整合资源输出问题


    配置css 查看css模块 配置是否成功
    extract-text-webpack-plugin 单独打包css 报错  Tapable.plugin is deprecated. Use new API on `.hooks` instead
    npm i -D extract-text-webpack-plugin@next

    postcss-loader 添加浏览器前缀
    mini-css-extract-plugin 代替  extract-text-webpack-plugin
    https://github.com/webpack-contrib/mini-css-extract-plugin

    CleanWebpackPlugin process.cwd() __dirname 区别
    css module 配置
    less 模块配置
    验证打包 css模块加载是否重复

    环境配置好以后 再配置
    代码分离
    打包构建速度 --懒加载

    涉及到 资源分配的问题 现在要设计一下 文件目录
## 项目目录
    ```
    ├── webpack                    # 项目webpack相关配置
    │   ├── webpack.common.js       # 公共配置
    │   ├── webpack.pro.js          # 生产环境配置
    │   ├── webpack.dev.js          # 开发环境配置
    │   └──
    ├── mock                       # 后端接口模拟
    │   ├── login.js                # 登录相关
    │   └──
    ├── public                     # 静态资源
    ├── src                        # 代码主目录
    │   ├── assets                     # 静态资源
    │   │   ├── css                 # 全局css
    │   │   ├── images              # 全局图片
    │   │   ├── icon                # 全局icon
    │   │   └──
    │   ├── components             # 全局公共组件
    │   │   ├── Left                # 左侧 (将资源与代码组合在一起，写文件夹分类 代码需要可移植性 )
    │   │   │   ├── menu             # menu菜单栏
    │   │   │   |– index.jsx
    │   │   │   |– index.less
    │   │   │   |– index.svg
    │   │   │   |– index.png
    │   │   │   └──
    │   │   ├── Main
    │   │   ├── Info
    │   │   ├── Body
    │   │   ├── Right
    │   │   └──
    │   ├── containers             # 布局(根据路由布局模块)
    │   │   ├── Aggregate           # 集合
    │   │   │   ├── Building         # 楼宇管理
    │   │   │   ├── House            # 房源管理
    │   │   │   ├── Attract          # 招商管理
    │   │   │   ├── Tenant           # 租客管理
    │   │   │   ├── Contract         # 合同管理
    │   │   │   ├── Payment          # 收付款
    │   │   │   ├── Evaluation       # 资产评估
    │   │   │   ├── Cost             # 成本合同
    │   │   │   ├── Property         # 物业管理
    │   │   │   └──
    │   │   ├── Workflow             # 工作流
    │   │   ├── ApplicationMarket   # 应用市场
    │   │   ├── InternalManagement  # 内部管理
    │   │   └──                     #
    │   ├── config                  # 项目配置
    │   │   ├── interceptors        #
    │   │   ├── index.ts            # 项目配置主文件
    │   │   ├── menu.ts             # 项目左侧菜单配置
    │   │   └──
    │   ├── styles                  # 样式目录
    │   ├── utils                   # 全局工具方法目录
    │   │                           #
    │   ├── global.js               # 全局JS umi会直接引入
    │   └── global.less             # 全局样式 umi会直接引入
    ├── .editorconfig               # IDE设置文件
    ├── .stylelintrc                # stylelint配置文件
    ├──
    └── yarn.lock                   # yarn生成文件
    ```

## Project layout

```sh
    |------------------------------------------------------|
    |  Left  |                  Main               |       |
    |        |                                     |       |

    |------------------------------------------------------|
    |        |                 Header (1,2,3)      |       |
    |        |-------------------------------------|-------|
    |        |                  Info               |       |
    |        |-------------------------------------|-------|
    |        |                                     |       |
    |        |                                     |       |
    |  Left  |                  Body               | Right |
    |        |                                     |       |
    |        |                                     |       |
    |        |                                     |       |
    |        |                                     |       |
    |------------------------------------------------------|

```

## 开发会烦







