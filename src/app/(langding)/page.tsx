import React from 'react';
import Baners from '@root/src/components/server/layout/banners';
import HomeLangding from '@root/src/components/server/layout/homelanding';


export default async function Home() {
  return (
    <div className='container'>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div style={{ width: '100%', height: '100%' }}>
        {/* <Banner /> */}
        <Baners/>
      </div>
      <div>
        <HomeLangding/>
      </div>
    </div>
  )
}
