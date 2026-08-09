# ArkG AI Models


ArkG AI provides OpenAI compatible API access to multiple AI models.


## DeepSeek Models


### deepseek-chat

General purpose conversational model.

Suitable for:

- Chat applications
- AI assistants
- Content generation


### deepseek-reasoner

Advanced reasoning model.

Suitable for:

- Complex problems
- Analysis tasks
- Reasoning applications



## Qwen Models


### qwen-series

Alibaba Qwen family models.

Suitable for:

- Chinese language tasks
- Enterprise applications
- General AI applications



## GLM Models


### glm-series

Zhipu AI GLM models.

Suitable for:

- Chinese AI applications
- Knowledge tasks
- Agent development



## API Format


ArkG AI uses OpenAI compatible API format.


Example:

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
            "content": "Hello"
        }
    ]
)
Model Selection

Different models can be selected according to application scenarios:

Scenario	Recommended Model
Chat Assistant	deepseek-chat
Reasoning Tasks	deepseek-reasoner
Chinese Content	Qwen
AI Agent	DeepSeek / GLM
