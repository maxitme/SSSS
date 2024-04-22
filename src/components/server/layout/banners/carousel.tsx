import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '100%',
  width:'100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carousels: React.FC = (props) => (
  <Carousel autoplay autoplaySpeed={1000} style={contentStyle}>
    {props.image.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`}  />
          </div>
        ))}
  </Carousel>
);

export default Carousels;