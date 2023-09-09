import { getPackageJSON,getBaseRollupPlugins } from "./utils";

const {name,module}=getPackageJSON('react')
//react包的路径
const pkgPath=resolvePkgPath(name)
//react产物路径
const pkgDistPath=resolvePkgPath(name,true)


export default [
    {
        input: `${pkgPath}/${module}`,
        output:{
            file:`${pkgDistPath}/index.js`,
            name:'index.js',
            format:'umd'
        },
        plugins : getBaseRollupPlugins(),
         // 用来指定代码执行环境的参数，解决this执行undefined问题 
    context: 'window'
    },

]