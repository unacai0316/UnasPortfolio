const express = require('express');
const cors = require('cors');
const axios = require('axios'); // 使用 axios 來發送請求

const app = express();
app.use(cors({
    origin: 'https://d322-2600-1012-b00f-6960-a037-28a9-73b2-e8', // 確保這裡是你的前端網址
}));

app.use(express.json()); // 解析 JSON 請求體


// 處理翻譯請求
app.post('/translate', async (req, res) => {
    const { q, source, target } = req.body;

    try {
        // 發送請求到 CORS 代理的 LibreTranslate
        const response = await axios.post('https://cors-anywhere.herokuapp.com/https://libretranslate.com/translate', {
            q,
            source,
            target
        });

        // 檢查 API 回應格式
        if (response.data && response.data.translatedText) {
            res.json(response.data);
        } else {
            res.status(500).json({ error: '無效的 API 回應格式' });
        }
    } catch (error) {
        console.error("Error during translation:", error);
        res.status(500).json({ error: '翻譯錯誤' }); // 返回錯誤信息
    }
});


// 啟動伺服器
app.listen(3000, () => {
    console.log('CORS Proxy is running on port 3000');
});
