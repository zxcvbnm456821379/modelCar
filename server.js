const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // 引入 cors 中间件

const app = express();
const port = 3000;

// 使用 cors 中间件，允许所有域名访问
app.use(cors());

// 提供 GLB 模型文件的路由
app.get('/model', (req, res) => {
  // 指定你的 .glb 文件路径
  const glbPath = path.join(__dirname, '/static/tesla_cybertruck.glb');
  
  // 设置 Content-Type 为 .glb 文件的 MIME 类型
  res.setHeader('Content-Type', 'model/gltf-binary');

  // 设置 Content-Disposition 头部，告诉浏览器这是一个文件下载
  res.setHeader('Content-Disposition', 'attachment; filename="model.glb"');
  
  // 发送文件
  fs.createReadStream(glbPath).pipe(res);
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});