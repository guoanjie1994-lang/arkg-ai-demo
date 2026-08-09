import OpenAI from "openai";


const client = new OpenAI({
    apiKey: "YOUR_API_KEY",
    baseURL: "https://arkg.com.cn/v1"
});


const response = await client.chat.completions.create({
    model: "deepseek-chat",
    messages: [
        {
            role: "user",
            content: "Hello, introduce artificial intelligence"
        }
    ]
});


console.log(response.choices[0].message.content);
