'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Card, Input, Button, Flex, Spin } from 'antd';
import OpenAIImageChat from './ImageComponent';
import { httpGet, httpPost, httpPut, httpDelete } from '@lib/HttpClient';
const apiKey = 'YOUR KEY';

const Loading: React.FC = () => (
  <Flex align="center" gap="middle">
    <Spin size="large" />
  </Flex>
);

const OpenAIChat = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const handleInputChange = e => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    // httpGet('/admin/blogs').then(res => {
    //   console.log(res);
    // });
    const temp = { a: 'a', b: { c: 'a' }, c: [{ a: 'f' }] };
    httpPost('/admin/blogs', temp).then(res => {
      console.log(res);
    });
    // httpPut('/admin/blogs', temp).then(res => {
    //   console.log(res);
    // });
    // httpDelete('/admin/blogs').then(res => {
    //   console.log(res);
    // });
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      //  const text = `hãy viết bài marketing cho image đính kèm theo max token và các trọng tâm ${prompt}`;
      const text = `${prompt}`;
      const payload: any = {
        model: 'gpt-4-vision-preview', // Replace with the appropriate model
        messages: [
          {
            role: 'assistant',
            content: [
              {
                type: 'text',
                text: text,
              },
            ],
          },
        ],
        user: 'unique_user_id_here234234235236236232',
        max_tokens: 4096,
      };
      if (image) {
        payload.messages[0].content.push({
          type: 'image_url',
          image_url: {
            url: image,
          },
        });
      }
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        payload,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`, // Replace with your actual OpenAI API key
            'Content-Type': 'application/json',
          },
        }
      );
      setLoading(false);
      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      setLoading(false);
      console.error('There was an error in fetching the response:', error);
      setResponse('Error fetching response.');
    }
  };

  return (
    <div style={{ height: '500px', padding: '20px' }}>
      <Row gutter={16} style={{ height: '100%' }}>
        <Col span={12} style={{ display: 'flex', flexDirection: 'column' }}>
          Trọng điểm
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <Input.TextArea
                rows={3}
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="Type your message here..."
                style={{ flexGrow: 1, marginBottom: '10px' }}
              />
            </div>
            <div>
              {' '}
              <Button
                disabled={loading === true}
                type="primary"
                onClick={handleSubmit}
              >
                {' '}
                Send
              </Button>
            </div>
          </div>
          <div style={{ height: 100 }}>
            <OpenAIImageChat
              setImage={setImage}
              image={image}
            ></OpenAIImageChat>
          </div>
        </Col>
        <Col
          span={12}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card
            title="Thông tin"
            style={{
              width: '100%',
              height: 500,
              whiteSpace: 'pre-line',
              fontSize: '16px',
            }}
          >
            {(loading && <Loading></Loading>) ||
              response ||
              'Your response will appear here...'}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OpenAIChat;
