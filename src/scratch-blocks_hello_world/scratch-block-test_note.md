
# scratch_webpack_note

参考 https://github.com/kyorohiro/doc.advent.scratch30

# 使用
```
git clone https://github.com/kyorohiro/doc.advent.scratch30
cd doc.advent.scratch30
cd scratch-block-test
npm install  # 慢!

# 是build
webpack 
cd dist
cp -r /Users/wwj/mylab/changxue/scratch-blocks/media/ media
open index.html # ok

# dev
webpack-dev-server 

```

# generate python
Blockly.Python.workspaceToCode(workspace)

注意看`scratch-block-test.js` 中的全局变量

# `doc.advent.scratch30/scratch-vm-test` 项目
```
ln -s /Users/wwj/mylab/changxue/blockly_dev/src/scratch-blocks_hello_world/scratch-block-test/node_modules/ node_modules
```

scratch3组件都是es6模块

# todo
驱动cozmo 使用remote_control