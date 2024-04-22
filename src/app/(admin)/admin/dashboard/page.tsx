import React from 'react';
import style from './style.module.css'
import { useTranslation } from '@root/src/i18n/server';
import RedirectButton from '@root/src/components/client/redirectButton';
import SignOut from '@components/client/signout';
import MenuAdmin from '../menu/page';
import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import BadgeNotifi from './badge';
import Header from './header';
const Dashboard =  () => {
  // const { t } = await useTranslation('common');
  return (
    <div style={{marginLeft:'250px'}}>
      {/* <h1>{t('hello')}</h1> */}
      {/* <div style={{ display: 'flex' }}>
        <div>t</div>
      </div>
      <div>
        <RedirectButton link={'/'} text={'test'}></RedirectButton>
        <p>admin</p>
      </div>
      <SignOut></SignOut> */}
      
    <Header/>
    </div>
  );
};

export default Dashboard;
