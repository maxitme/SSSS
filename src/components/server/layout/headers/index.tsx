'use client';
import {
  CloseOutlined,
  DownOutlined,
  EnvironmentOutlined,
  LoginOutlined,
  PhoneOutlined,
  RightOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import style from './style.module.css';
import Drawers from './drawer';
import { useMemo, useState } from 'react';
import Link from 'next/link';
const Headers = (props: any) => {
  const focusInputSearch = {
    outline: 'none',
    padding: '10px 30px 10px 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    height: '30px',
    marginTop: '45px',
    width: '300px',
    borderBottom: '1px solid #CDAD70',
  };

  const dropMenu = {
    display: 'none',
    position: 'absolute',
    left: '0px',
    border: '1px solid #ccc',
  };

  const prospTablet = {
    border: 'none',
    fontSize: '25px',
    marginTop: '8px',
  };

  const [classHidden, setClassHidden] = useState(true);
  const setHiddens = () => {
    if (classHidden === true) {
      setClassHidden(false);
    } else {
      setClassHidden(true);
    }
  };

  const [classHiddenPhone, setClassHiddenPhone] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);
  const setHiddensPhone = () => {
    if (classHiddenPhone === true) {
      setClassHiddenPhone(false);
    } else {
      setClassHiddenPhone(true);
    }
  };
  const { datacategory } = props;
  // console.log(hoveredId, 'hover');

  const getParams = (item) => {
    // datacategory.map(id => {} `name=${id.slug}`).join('&');
    return datacategory.map(id => id.slug === item ? `name=${id.slug}` : '').join('')
     
  };

  return (
    <div
      className={`${style.zoneAllHeader} container bg-white text-black w-auto`}
    >
      <div>
        <div
          className={`${style.headersFirts} flex justify-around`}
          style={{ borderBottom: '1px solid #DDDDDD' }}
        >
          <div
            className={`${style.contactStore} flex items-center mb-0  pr-[390px]`}
          >
            <EnvironmentOutlined />
            <a href="" className="mx-1">
              LIÊN HỆ CỬA HÀNG
            </a>
          </div>
          <div className={`${style.loginAndResignter} flex items-center mb-0 `}>
            <LoginOutlined />
            <a href="" className={`${style.login} mx-1`}>
              ĐĂNG NHẬP
            </a>
            <UserAddOutlined style={{ marginLeft: '15px' }} />
            <a href="" className="mx-1">
              ĐĂNG KÝ
            </a>
          </div>
        </div>

        <div className={`${style.headersTwo} flex justify-center`}>
          <div
            className={`${style.searchContainer}`}
            style={{ display: 'flex', position: 'relative' }}
          >
            <input
              type="text"
              style={focusInputSearch}
              placeholder="Bạn muốn tìm sản phẩm gì?"
              className="search-input"
            />
            <button
              className="search-button"
              style={{ position: 'absolute', right: '10px', top: '48px' }}
            >
              <SearchOutlined style={{ fontSize: '20px' }} />
            </button>
          </div>
          <div className={`${style.logoContainer}`}>
            <Link href={'./'}>
              {' '}
              <img
                src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/logo.png?1704276438486"
                alt="Logo"
                className={`${style.logo}`}
              />
            </Link>
          </div>
          <div
            className={`${style.hotlineContainer} mr-[70px] mt-[50px] flex pl-[32px]`}
          >
            <div className={`${style.hotline} flex`}>
              <PhoneOutlined style={{ fontSize: '38px', marginTop: '-30px' }} />
              <div className="mt-[-5px] pl-2">
                <p>Hỗ trợ & tư vấn</p>
                <a href="" className={`${style.hotlinePhone}`}>
                  0901725199
                </a>
              </div>
            </div>
            <div
              className={`${style.cart} ml-[52px] flex`}
              style={{ position: 'relative' }}
            >
              <span className="cart-icon">
                <ShoppingCartOutlined style={{ fontSize: '38px' }} />
              </span>
              <div
                style={{
                  position: 'absolute',
                  background: '#A7252F',
                  top: '-3px',
                  left: '25px',
                  textAlign: 'center',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                }}
              >
                <span
                  className="item-count"
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    left: '5px',
                    color: 'white',
                  }}
                >
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${style.Menu} flex justify-center`}
          style={{ background: '#A7252F' }}
        >
          <div
            style={{
              background: '#A7252F',
              width: '900px',
              color: 'white',
              position: 'relative',
              fontWeight: 'bold',
            }}
            className="flex justify-center"
          >
            <p
              className={`${style.hoverHome} hover:cursor-pointer px-5 py-2`}
              style={{ backgroundColor: '#CDAD70' }}
            >
              <Link href={'/'}>TRANG CHỦ</Link>
            </p>
            <p
              className={`${style.hoverableMenu} hover:cursor-pointer px-5 py-2`}
              style={{ display: 'inline-block', position: 'relative' }}
            >
              GIỚI THIỆU{' '}
              <DownOutlined style={{ fontSize: '12px', marginTop: '-7px' }} />
              <div className={style.dropdownMenu}>
                <p>
                  <Link href={'/introductions'}>
                    CỬA HÀNG TRẦM HƯƠNG - HƯƠNG VÂN CÁT
                  </Link>
                </p>
              </div>
            </p>
            <p
              className={`${style.hoverableProduct}  hover:cursor-pointer px-5 py-2`}
              style={{ display: 'inline-block', position: 'relative' }}
            >
              <Link href={'/category'}> SẢN PHẨM</Link>
              <DownOutlined style={{ fontSize: '12px' }} />{' '}
              <div className={style.dropdownProduct}>
                <ul className={style.listMenuProduct}>
                  {datacategory
                    .filter(item => item.parentId === null)
                    .map(item => (
                      <li
                        key={item.id}
                        className={style.listItem}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      >
                        <Link href={`/category?${getParams(item.slug)}`}>
                          {item.name}
                        </Link>

                        {hoveredId === item.parentId && (
                          <span>
                            {datacategory
                              .filter(subItem => subItem.parentId === item.id)
                              .map(subItem => (
                                <RightOutlined
                                  key={subItem.id}
                                  style={{
                                    fontSize: '10px',
                                    position: 'absolute',
                                    right: 10,
                                    top: 15,
                                  }}
                                />
                              ))}
                          </span>
                        )}

                        {hoveredId === item.id && (
                          <ul className={style.itemAgarwoodring}>
                            {datacategory
                              .filter(subItem => subItem.parentId === item.id)
                              .map(subItem => (
                                <li
                                  key={subItem.id}
                                  className={style.itemForAgarwoodring}
                                >
                                  {subItem.name}
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    ))}

                  {/* <li className={style.listItemTea}>
                    Trà đạo{' '}
                    <span>
                      <RightOutlined
                        style={{ fontSize: '10px', marginLeft: '122px' }}
                      />
                    </span>
                    <div className={style.itemTea}>
                      <ul className="">
                        <li className={style.itemForTea}>Ấm trà</li>
                        <li className={style.itemForTea}>Chén trà</li>
                        <li className={style.itemForTea}>Trà ngon</li>
                        <li className={style.itemForTea}>Ấm & Bếp đun</li>
                        <li className={style.itemForTea}>Bàn trà</li>
                        <li className={style.itemForTea}>Tống & Lọc</li>
                        <li className={style.itemForTea}>Dụng cụ trà</li>
                      </ul>
                    </div>
                  </li>
                  <li className={style.listItem}>Mặt dây chuyền</li>
                  <li className={style.listItem}>Kỳ nam</li>
                  <li className={style.listItem}>Vòng trầm hương</li>
                  <li className={style.listItemAgarwoodincense}>
                    Nhang trầm hương{' '}
                    <span>
                      <RightOutlined
                        style={{ fontSize: '10px', marginLeft: '39px' }}
                      />
                    </span>
                    <div className={style.itemAgarwoodincense}>
                      <ul className="">
                        <li className={style.itemForAgarwoodincense}>
                          Nhang trầm
                        </li>
                        <li className={style.itemForAgarwoodincense}>
                          Phụ kiện xông trầm
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={style.listItem}>Trầm hương vụn và bột</li>
                  <li className={style.listItem}>Rượu trầm hương</li> */}
                </ul>
              </div>
            </p>
            <p
              className={`${style.hoverableContact} hover:cursor-pointer px-5 py-2`}
            >
              LIÊN HỆ
            </p>
          </div>
        </div>

        <div className={`${style.zoneMenuTablet}`}>
          <div className={`${style.menuTablet} grid grid-cols-3`}>
            <div className={`${style.drawerMenu}`}>
              <div>
                <Drawers tablet={prospTablet} />
              </div>
              <div>
                <EnvironmentOutlined className={`${style.location}`} />
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className={`${style.imgTablet}`}
                src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/logo.png?1704276438486"
                alt=""
              />
            </div>
            <div className="flex justify-end mr-[15px]">
              <div>
                <SearchOutlined
                  className={`${style.search}`}
                  onClick={() => setHiddens()}
                />
              </div>
              <div className={`${style.countShopping}`}>
                <ShoppingOutlined className={`${style.shopping}`} />
                <div className={`${style.count}`}>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.zoneMenuPhone}`}>
          <div className={`${style.menuPhone} grid grid-cols-3`}>
            <div className={`${style.drawerMenuPhone}`}>
              <div>
                <Drawers />
              </div>
              <div>
                <EnvironmentOutlined className={`${style.location}`} />
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className={`${style.imgPhone}`}
                src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/logo.png?1704276438486"
                alt=""
              />
            </div>
            <div className="flex justify-end mr-[15px]">
              <div>
                <SearchOutlined
                  className={`${style.searchPhone}`}
                  onClick={() => setHiddensPhone()}
                />
              </div>
              <div className={`${style.countShoppingPhone}`}>
                <ShoppingOutlined className={`${style.shoppingPhone}`} />
                <div className={`${style.countPhone}`}>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.hiddenSearchs}`}>
        <div
          className={classHidden ? `${style.unhiddens}` : `${style.hiddens}`}
        >
          <input type="text" placeholder="Trầm hương?" />
          <div className={`${style.hiddenSearch}`}>
            <SearchOutlined className="mx-2" />
            <CloseOutlined />
          </div>
        </div>
      </div>

      {/* <div className={`${style.hiddenSearchsPhone}`}>
        <div
          className={classHiddenPhone ? `${style.unhiddensPhone}` : `${style.hiddensPhone}`}
        >
          <input type="text" placeholder="Trầm hương?" />
          <div className={`${style.hiddenSearchPhone}`}>
            <SearchOutlined className="mx-2" />
            <CloseOutlined />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Headers;
