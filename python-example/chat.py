from openai import OpenAI


client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://arkg.com.cn/v1"
)


response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {
            "role": "user",
            "content": "你好，请介绍一下人工智能"
        }
    ]
)


print(response.choices[0].message.content)
