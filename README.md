# huanyer-构建脚本

### 安装
```
npm install @huanyer/huanyer-script
```

### 使用
```
huanyer-script start

huanyer-script build
```

#### 相关全局变量解释

- REACT_APP_REPORT=true 展示打包报告
- REACT_APP_BASENAME 设置项目basename
- GENERATE_SOURCEMAP=false 关闭sourcemap
- 此脚本构建项目，默认开启gzip压缩