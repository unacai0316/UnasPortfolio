const express = require('express');
const cors = require('cors');
const app = express();

// 啟用所有 CORS 請求
app.use(cors());

// 處理所有 POST 請求
app.use(express.json());

app.post('*', (req, res) => {
  const targetUrl = req.body.url;
  fetch(targetUrl, {
    method: req.body.method || 'GET',
    headers: req.body.headers || {},
    body: req.body.body ? JSON.stringify(req.body.body) : undefined,
  })
  .then(response => response.text())
  .then(data => res.send(data))
  .catch(error => res.status(500).send('Proxy error: ' + error.message));
});

// 伺服器監聽在3000端口
app.listen(3000, () => {
  console.log('CORS Proxy is running on port 3000');
});
