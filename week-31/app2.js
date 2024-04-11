const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // 设置一个名为 username 的 cookie，值为 John
  res.cookie('username', 'John');

  // 设置一个名为 rememberme 的 cookie，值为 true，有效期为1小时
  res.cookie('rememberme', true, { maxAge: 3600000 });

  // 设置一个名为 language 的 cookie，值为 en-US，域名为 example.com，路径为 /profile
  res.cookie('language', 'en-US', { domain: 'example.com', path: '/profile' });

  res.send('Cookies have been set');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});