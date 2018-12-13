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

    配置静态资源文件的加载
    css
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
    postcss 到时候再弄这个额兼容吧

    jsx

    file file-loader url-loader
    url-loader可以将图片转为base64字符串，能更快的加载图片，一旦图片过大，
    就需要使用file-loader的加载本地图片，故url-loader可以设置图片超过多少字节时，使用file-loader加载图片。
        base64编码的图片不能像正常的图片可以进行缓存
        对于比较小的图片，使用base64编码，可以减少一次图片的网络请求；那么对于比较大的图片,使用base64就不适合了，编码会和html混在一起，一方面可读性差，另一方面加大了html页面的大小，反而加大了下载页面的大小

    环境配置好以后 再配置
    代码分离
    打包构建速度 --懒加载

    涉及到 资源分配的问题 现在要设计一下 文件目录

    现在遇到的问题是 我应该继续先写代码分割 写优化 还是先吧项目依赖下载 搭建好 再开始进行优化分割的操作
    webpack官方文档提供的代码分割的方式
        1.import()
        2.打包第三方库vendor也可以优化加载速度
        3.把公共代码打包分割也可以
    react 提供的 coding split
        import()
        React Loadable
        基于路由的代码分隔


    question
        还有 webpack 官方提供的其他的优化方式 后续尝试
        include  exclude
        还有  webpack 链式操作的plugin webpack.cache

    react项目搭建
        npm install --save react - 安装React.
        npm install --save react-dom 安装React Dom,这个包是用来处理virtual DOM。这里提一下用React Native的话，这里就是安装react-native

    babel项目依赖
        https://babeljs.io/docs/en/#jsx-and-react


    牵扯到的问题真的多  真不知道babel怎噩梦配置 然后认真看api之后明白了 升级babel7  后面加@
    不然就是以及一下版本
    然后先重新配置@babel/core  babel-loader 加入配置预设  @babel/preset-env 跑起来
    之后配置raect  看升级 babel7 的react配置 @babel/preset-react

    npm i @babel/core babel-loader @babel/preset-env @babel/preset-react -D
    之后在配置jsx语言loader @babel/plugin-syntax-jsx
    jsx react编译 @babel/plugin-transform-react-jsx
    npm i @babel/plugin-syntax-jsx @babel/plugin-transform-react-jsx -D


    question

    搭环境    首先 你要确定 你要做什么  哪些功能需要用到什么  这么功能模块 怎么调用 之间有什么依赖关联  怎么写比较好维护、扩展。
    别什么 都用最新的 或者 看到啥感兴趣就用  搞那么一大堆箩筐 乱七八糟的 最后把自己搞懵逼了

    这个时候 应该去做webpack的优化 然后再去实验 优化是否有效
    https://www.jb51.net/article/142761.htm 优化的方向
    看了一下 太麻烦了 还要去验证  溜了溜了 回去看书 不想写了

    webpack 优化 看这个 到时候回来在配置吧
    https://www.jianshu.com/p/ec86c9e64560


    再下一步去搭建react的环境
    我要在 react里写
    修饰器
    async
    yeld
    import 懒加载
    react-router
    react-redux
    ts配置


    这个到了以后 就要配置 es6  es7  的语法配置 plugin
    还有react的 语法配置

    踩坑  url-loader 内置file-loader 所以用 url-loader 就不用 file-loader


    这个时候就是一个思考的过程了



    npm i react-router react-redux -S
    npm i ant-design -S



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
    │   ├── router                  # 路由配置
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   └──
    │   ├── redux                  # 数据管理
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   └──
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





## react-router
    搭建大路由模块
    权限配置
    更改为配置路由
    搭建子模块配置
    //组建名称实际上相当于函数名字  props 穿参数 实际上相当于 函数的参数  所谓的无状态组建就是 没有内部定义变量的纯函数



## 规范
    所有组建最外层 classname  都是 containers
    所有引入style.less 都是 styles 命名
    行内样式 除了js 常量命名必须写在外面 不准出现在 render的html里  尽量保持 html结构代码简洁
