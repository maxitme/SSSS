import React from 'react';
import style from './style.module.css'
import { SearchOutlined } from '@ant-design/icons';
import BadgeNotifi from './badge';


const Header =  () => {
  // const { t } = await useTranslation('common');
  return (
    <div>
      
      <div className={`${style.header}`}>
        <div className={`${style.searchContainer}`}>
          <input className={`${style.inputSearch}`} type="text" placeholder='Nhập từ khóa tìm kiếm' />
          <div className={`${style.iconSearch}`}><SearchOutlined /></div>
        </div>
        <div className={`${style.infoUserContainer}`}>
          <div className={`${style.imageUser}`}>
            <p>H</p>
          </div>
          <div>
            <div>
              huongvancat
            </div>
            <div>
              admin
            </div>
          </div>
        </div>
        <div className={`${style.notificationContainer}`}>
          {/* <BellOutlined style={{fontSize:'35px'}} />
          <div className={`${style.countNotification}`}>
           <p>10</p>
          </div> */}
          <BadgeNotifi/>
        </div>
      </div>
    </div>
  );
};

export default Header;
