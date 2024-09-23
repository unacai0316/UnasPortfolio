async function fetchTranslation(text) {
    try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://libretranslate.com/translate`, {
            method: "POST",
            body: JSON.stringify({
                q: text,
                source: "en",
                target: "zh-TW"
            }),
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.translatedText) {
            return data.translatedText;
        } else {
            throw new Error("Invalid response format");
        }
    } catch (error) {
        console.error("Error during translation:", error);
        return "翻譯錯誤";
    }
}

async function translateAndEncrypt() {
    const inputWord = document.getElementById('inputWord').value.toLowerCase();

    const translatedText = await fetchTranslation(inputWord);

    if (translatedText !== "翻譯錯誤") {
        document.getElementById('translated').innerText = `中文翻譯: ${translatedText}`;
        
        // 這裡可以加入加密的邏輯，現在只是示範
        const encryptedText = simpleEncrypt(translatedText);
        document.getElementById('encrypted').innerText = `加密結果: ${encryptedText}`;
    } else {
        document.getElementById('translated').innerText = `翻譯失敗，請再試一次。`;
    }
}

// 簡單加密函數的範例，這裡可以根據需要進行修改
function simpleEncrypt(text) {
    return text.split('').reverse().join(''); // 反轉字串作為加密示範
}
