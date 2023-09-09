# 卡颂从0写一个react18


1、[卡颂从0写一个react18](https://github.com/keqingrong/react-18)
2、[react18源码解析](https://github.com/ljianshu/Blog/issues/10)

# 项目创建项目
1、 pnpm init 
2、pnpm i eslint -D -w  安装eslint
3、npx eslint --init  初始化eslint

创建pnpm-workspace.yaml文件定义项目目录packages

# 初始化

pnpm i -D -w typescript

pnpm i -D -w @typescript-eslint/eslint-plugin 
 
# 代码风格

pnpm i prettier -D -w
创建.prettierrc.json文件

pnpm i eslint-config-prettier eslint-plugin-prettier -D -w


# commit 代码检查
 pnpm i husky -D -w
 初始化 npx husky install

把 pnpm lint 添加到检查中
 npx husky add .husky/pre-commit "pnpm lint"

不每次提交对全量代码进行检查，只对修改的文件进行检查
添加lint-staged 实现只对暂存区代码进行检查


pnpm i commitlint @commitlint/config-conventional -D -w
 创建 .commitlintrc.js文件
module.exports={
    extends:['@commitlint/config-conventional']
}

npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS"


# 选择打包工具
我们项目特点
1、是库 而不是业务项目
2、希望工具尽可能简洁、打包产物可读性高
使用 rollip打包  
pnpm i rollup -D -w

pnpm i -D -w rollup-plugin-typescript2
pnpm i -D -w @rollup/plugin-commonjs


删除打包模块插件
pnpm i -D -w rimraf

打包之后生成package.json 插件
pnpm i -D -w rollup-plugin-generate-package-json
 

打包之后 cd到react文件  
 cd dist/node_module/react/
 执行pnpm link --global  全局react指向打包之后的react


在其他文件目录创建一个react项目npx create-react-app react-demo  引用我们打包之后的react
在react-demo项目执行 pnpm link react --global   把demo项目的react引用指向我们打包的引用




