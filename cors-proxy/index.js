const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

app.use('/', createProxyMiddleware({
    target: 'https://libretranslate.com',
    changeOrigin: true,
    pathRewrite: {
        '^/': '', // 把所有請求轉發給 https://libretranslate.com
    },
}));

app.listen(3000, () => {
    console.log('CORS Proxy is running on port 3000');
});
