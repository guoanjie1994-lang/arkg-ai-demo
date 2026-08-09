# ArkG AI

OpenAI Compatible API for Multiple AI Models.

通过一个统一 API 接入多个 AI 模型。

支持：

- DeepSeek
- Qwen
- GLM


## Features

- OpenAI SDK Compatible
- Multiple AI Model Access
- Simple API Integration
- Developer Friendly


## Quick Start

### Python Example

```python
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
            "content": "Hello, AI"
        }
    ]
)

print(response.choices[0].message.content)
Supported Models

Currently supported:

DeepSeek Chat
DeepSeek Reasoner
Qwen Models
GLM Models
Use Cases

Suitable for:

AI Agent Development
SaaS Applications
AI Tools
Model Testing
Website

https://arkg.com.cn

About

ArkG AI provides an OpenAI compatible API layer,
helping developers access multiple AI models through a unified interface.
