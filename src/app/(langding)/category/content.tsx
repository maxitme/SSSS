'use client';
import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const Content = (props:any) => {
  const {item} = props
  return (
    <div className="flex font-sans">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={`https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05165.jpg?v=1711632460700`} />}
      >
        <Meta
          title={item.name}
          description="This is the description" 
        />
        <p>${item.price}</p>
      </Card>
    </div>
  );
};
export default Content;
