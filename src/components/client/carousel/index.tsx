'use client'
import { Carousel } from 'antd';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons'
import { useSession } from "next-auth/react"
const ArrowLeft = (props) => {
  return (<div style={{
    cursor: 'pointer',
    position: 'absolute', top: '48%', left: 15, fontSize: '1.2em',
    border: '1px dotted rgba(191,191,191,0.6)',
    width: 40,
    height: 40,
    padding: 5,
    zIndex: 1,
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: 'bolder',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    background: 'rgba(252,252,252,0.7)'

  }}
    onClick={props.onClick}
  ><DoubleLeftOutlined></DoubleLeftOutlined></div>
  )
}
const ArrowRight = (props) => {
  return (<div style={{
    cursor: 'pointer',
    position: 'absolute', top: '48%', right: 15, fontSize: '1.2em',
    border: '1px dotted rgba(191,191,191,0.6)',
    width: 40,
    height: 40,
    padding: 5,
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: 'bolder',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    background: 'rgba(252,252,252,0.7)',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
  }}
    onClick={props.onClick}>
    <DoubleRightOutlined></DoubleRightOutlined>
  </div>)
}
const CarouselComp = (props) => {
  const a = useSession()
  console.log(a)

  return (
    <div style={{ width: '100%', paddingTop: '50%', position: 'relative', overflow: 'hidden', }}>
      <Carousel
        arrows
        autoplaySpeed={1500}
        prevArrow={<ArrowLeft />}
        nextArrow={<ArrowRight />}
        autoplay
        style={{ position: 'absolute', top: 5, left: 5, right: 5, bottom: 5, margin: 'auto', maxWidth: '90vw'}}
      >
        {props.images.map((image, index) => (
          <div key={index} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;