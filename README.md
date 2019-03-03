<div align="left" markdown="1" style="text-align:left">

**Isolated Vue component development environment with a living style guide**

> 在 [Vue Styleguidist](https://github.com/styleguidist/vue-styleguidist), 基础上增加了对组件依赖关系的分析，依赖分析使用了 [call-dependency](http://npm.sankuai.com/package/call-dependency)

![](https://user-images.githubusercontent.com/10201025/48210221-e7bcee00-e344-11e8-92d7-df4d988598f7.gif)

## 如何使用

## 1. 安装 vue-component-docs

```bash
npm install --save-dev vue-component-docs
```

## 2. 添加配置文件

@hfe/vue-component-docs 默认情况下以项目根目录下的 `styleguide.config.js` 做为配置文件。也可以自定义配置文件名称，再通过 `--config` 参数指定即可。

[详细的配置文档](https://vue-styleguidist.github.io/Configuration.html)

> **Note:** 在 Vue-styleguidist 在基础上，增加了四个配置，用于实现组件依赖分析
1. `showDependency`, Type: `Boolean`，是否展示引用组件的文件, 默认false。
2. `dependencyTreeDirs`, Type: `Array`, 分析引用关系的目录，必填(如果 showDependency 为 true)。
3. `baseDir`, Type: `String`, 计算文件相对路径的基础路径，必填。
4. `fileExtensions`, Type: `Array`, 分析引用关系的文件扩展类型， 默认 default: ['js', 'vue']。


## 3. 添加 npm scripts

```diff
{
  "scripts": {
+    "docs:dev": "vue-docs server", // 本地开发，可通过 --config 指定配置文件，eg: "vue-docs server --config xxx.config.js"
+    "docs:build": "vue-docs build" // 构建静态文件
  }
}
```
然后，你可以本地启动了或者打包组件文档了！


## 4. 现在，你需要写组件文档了~

给组件写文档，需要做两部分工作：
1. 组件内添加注释：描述组件和 props
Usage：
```vue
<script>
/**
 * 我是一个组件
 */
export default {
  props: {
    /**
     * @model
     */
    value: {
      type: String,
      required: true
    },
    /**
     * 大小
     */
    size: {
      type: Stirng,
      default: 'mini'
    }
  }
}
</script>
```

2. 添加同名 markdown 文件，用于展示组件示例 <br/>

  Usage：

  ### 组件示例

  ```vue
  const data = {
    value: ''
  };
  const size = 'small';

  <hfe-demo
    v-model="data.value"
    :size="size"
  ></hfe-demo>
  ```


深入了解请查看 [document your components](https://vue-styleguidist.github.io/Documenting.html#slots-documentation)


## 5. Cookbook

- [Read the cookbook](https://vue-styleguidist.github.io/Cookbook.html#how-to-add-third-party-plugins-to-the-style-guide)



MIT License
