# ArkG AI

OpenAI Compatible API for Multiple AI Models.

通过一个统一 API 接入多个 AI 模型。

## Supported Models

- DeepSeek
- Qwen
- GLM


## Features

- OpenAI SDK Compatible
- Multiple AI Model Access
- Simple API Integration
- Developer Friendly


## Quick Start


### API Endpoint

```
https://arkg.com.cn/v1
```


### Python Example


Install:

```bash
pip install openai
```


Code:

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
```


### Node.js Example

See:

```
node-example/chat.js
```


### Curl Example

See:

```
curl-example/chat.sh
```


## Models


Currently supported:

- DeepSeek Chat
- DeepSeek Reasoner
- Qwen Models
- GLM Models


## Use Cases


Suitable for:

- AI Agent Development
- SaaS Applications
- AI Tools
- Model Testing


## Get API Key


1. Visit:

https://arkg.com.cn


2. Create an account

3. Generate API Key

4. Start using AI models


## About


ArkG AI provides an OpenAI compatible API layer,
helping developers access multiple AI models through a unified interface.
https://arkg.com.cn

About

ArkG AI provides an OpenAI compatible API layer,
helping developers access multiple AI models through a unified interface.
