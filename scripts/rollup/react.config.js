import { getPackageJSON, getBaseRollupPlugins, resolvePkgPath } from "./utils";
import generatePackageJson from "rollup-plugin-generate-package-json"

const { name, module } = getPackageJSON('react')
//react包的路径
const pkgPath = resolvePkgPath(name)
//react产物路径
const pkgDistPath = resolvePkgPath(name, true)


export default [
    {
        input: `${pkgPath}/${module}`,
        output: {
            file: `${pkgDistPath}/index.js`,
            name: 'index.js',
            format: 'umd'
        },
        plugins: [...getBaseRollupPlugins(),
        generatePackageJson({
            inputFolder: pkgPath,
            outputFolder: pkgDistPath,
            baseContents: ({ name, description, version }) => ({
                name,
                description,
                version,
                main: 'index.js'
            })
        })],
        // 用来指定代码执行环境的参数，解决this执行undefined问题 
        context: 'window'
    },
    //jsx-runtime
    {
        input: `${pkgPath}/src/jsx.ts`,
        output: [
            //jsx-runtime
            {
                file: `${pkgDistPath}/jsx-runtime.js`,
                name: 'jsx-runtime.js',
                format: 'umd'
            },
            //jsx-dev-runtime
            {
                file: `${pkgDistPath}/jsx-dev-runtime.js`,
                name: 'jsx-dev-runtime.js',
                format: 'umd'
            },
        ],
        plugins: getBaseRollupPlugins(),
    }

]