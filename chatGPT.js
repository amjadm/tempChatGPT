const AnswerChat = async (data, systemMsg) => {  
  const OPEN_AI_KEY = "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";
  const chatConversation = [
      {"role": "system", "content": "You are a helpful assistant, give me information about computer science topics"},
      {"role": "user", "content": "react native"},
    ],
  
  const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPEN_AI_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: chatConversation,
        temperature: 1,
        max_tokens: 150,
      }),
    };
  
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', requestOptions);
        const data = await response.json();
        // console.log('data', JSON.stringify(data));
        return [data.choices[0].message.content];
  
    } catch (error) {
      console.error('AnswerChatError', error);
      return "";
    }
};
