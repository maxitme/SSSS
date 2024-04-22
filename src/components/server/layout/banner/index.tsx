import Carousel from '@components/client/carousel'
import React from 'react'
import { getCurrentUser } from "@src/lib/session"

const images = [
  'images/carousel/1.png',
  'images/carousel/2.png',
  'images/carousel/3.png',
  'images/carousel/4.png',
]

export default async function Banner() {
  const user = await getCurrentUser()

  return (
    <Carousel images={images} />
  );
}

