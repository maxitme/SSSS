'use client';

import type { MenuProps } from 'antd';
import { Checkbox, Divider, Layout, Menu, Pagination } from 'antd';
import Content from './content';
import { useEffect, useState } from 'react';
import style from './style.module.css';
import DropdownFilter from './dropdown';
import Link from 'next/link';
import {
  getCategoryForProductByName,
  getCategoryForProductBySlug,
} from './test';
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

function convertData(data) {
  return data.map((i, indexs) =>
    i.parentId === null
      ? getItem(
          i.name,
          i.id,
          '',
          data
            .filter(item => item.parentId === i.id)
            .map((items, index) => getItem(items.name, items.id))
        )
      : null
  );
}
const MenuCategory = props => {
  const { datacate, dataproduct } = props;
  const menuItems = convertData(datacate);
  const [dataproducts, setDataproducts] = useState(dataproduct);
  const [datatitle, setDataTitle] = useState('');
  const onTitleClick = async ({ key }) => {
    try {
      const get = await getCategoryForProductByName(Number(key)).then(
        res => res.data
      );
      const categorySlugs = get.map(product => product.category.slug);
      setDataproducts(get);
      const params = new URLSearchParams(window.location.search);
      params.set('name', categorySlugs);
      window.history.pushState(
        {},
        '',
        `${window.location.pathname}?${params}${window.location.hash}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const onClick = async ({ key }) => {
    console.log(key);
    try {
      const get = await getCategoryForProductByName(Number(key)).then(
        res => res.data
      );
      if (get === null) {
        setDataproducts([]);
      } else {
        const categorySlugs = get.map(product => product.category.slug);
        setDataproducts(get);
        const slugsAsString = categorySlugs.split(',')[0]
        const params = new URLSearchParams(window.location.search);
        params.set('name', slugsAsString);
        window.history.pushState(
          {},
          '',
          `${window.location.pathname}?${params}${window.location.hash}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const items: MenuProps['items'] = menuItems.map(item => {
    if (item !== null) {
      const isParent = item.children && item.children.length >= 0;
      return isParent
        ? {
            ...item,
            onTitleClick: onTitleClick,
          }
        : item;
    }
  });

  const onChange = e => {
    console.log(e);
  };
  const Component = () => {
    return (
      <div>
        <Layout>
          <h1>chu co san pham</h1>
        </Layout>
      </div>
    );
  };

  function MyComponent({ dataproduct }) {
    const [dataToRender, setDataToRender] = useState([]);

    useEffect(() => {
      async function getData(slug) {
        const data = await getCategoryForProductBySlug(slug).then(
          res => res.data
        );
        return data;
      }
      const params = new URLSearchParams(new URL(window.location.href).search);
      const name = params.get('name');
      console.log(name,'na');
      if (name == null) {
        setDataTitle('DANH MỤC SẢN PHẨM');
        setDataToRender(dataproduct);
      } else if (name != null && dataproducts.length > 0) {
        getData(name.split(',')[0]).then(res => {
          setDataToRender(res);
          if (res.length > 0 && res[0].category) {
            const categoryName = res[0].category.name.toUpperCase();
            setDataTitle(categoryName); // Cập nhật state hoặc thực hiện hành động với tên danh mục
          }
        });
      } else if (dataproducts.length < 0 && name === null) {
        setDataToRender([]);
      }
    }, [dataproduct]);
    const content =
      dataToRender.length > 0 ? (
        <div className="grid grid-cols-3 gap-5 mb-5 ml-10">
          {dataToRender.map((item, index) => (
            <Layout key={index}>
              <Link href={`/product/productdetails/${item.id}`}>
                <Content item={item} />
              </Link>
            </Layout>
          ))}
        </div>
      ) : (
        <Component />
      );

    return content;
  }

  function onClickReload(pr) {
    setDataproducts(pr);
    // history.pushState({}, '', '/category');
    history.replaceState({}, '', '/category');
  }

  return (
    <div className={`${style.zoneProduct}`}>
      <div className="ml-6 mb-10">
        Trang chủ »{' '}
        {datatitle
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </div>
      <div className={`${style.headerProduct}`}>
        <div
          className={`${style.textProductPortfolio}`}
          onClick={() => onClickReload(dataproduct)}
        >
          DANH MỤC SẢN PHẨM
        </div>
        <div className={`${style.textProduct}`}>{datatitle}</div>
        <div className={`${style.filterProduct}`}>
          Sắp xếp: <DropdownFilter />
        </div>
      </div>
      <div className="flex justify-center mx-auto">
        <div>
          <Menu
            onClick={onClick}
            style={{ width: 256 }}
            mode="inline"
            items={items}
          />
          <div>
            <p className={`${style.textFilter}`}>BỘ LỌC</p>
            <div className={`${style.listCheckBoxFilterProduct}`}>
              <p>Tìm theo mức giá</p>
              <div className="mt-2">
                <Checkbox onChange={onChange}>Giá dưới 3.000.000₫</Checkbox>
              </div>
              <div className="mt-2">
                <Checkbox onChange={onChange}>
                  Giá 3.000.000₫ - 10.000.000₫
                </Checkbox>
              </div>
              <div className="mt-2">
                <Checkbox onChange={onChange}>
                  Giá 10.000.000₫ - 30.000.000₫
                </Checkbox>
              </div>

              <div className="mt-2">
                <Checkbox onChange={onChange}>
                  Giá 30.000.000₫ - 50.000.000₫
                </Checkbox>
              </div>
              <div className="mt-2">
                <Checkbox onChange={onChange}>Giá trên 50.000.000₫</Checkbox>
              </div>
            </div>
            <div className={`${style.listCheckBoxFilterProduct}`}>
              <p>Chất hàng</p>
              <div className="mt-2">
                <Checkbox onChange={onChange}>Chìm</Checkbox>
              </div>
              <div className="mt-2">
                <Checkbox onChange={onChange}>Banh</Checkbox>
              </div>
              <div className="mt-2">
                <Checkbox onChange={onChange}>Tròn</Checkbox>
              </div>

              <div className="mt-2">
                <Checkbox onChange={onChange}>Đúc</Checkbox>
              </div>
              <div className="mt-2">
                <Checkbox onChange={onChange}>Lu thống</Checkbox>
              </div>
              <div className="mt-2">
                <Checkbox onChange={onChange}>108 hạt</Checkbox>
              </div>
              <div className="mt-2">
                <Checkbox onChange={onChange}>216 hạt</Checkbox>
              </div>
            </div>
            <div className="mt-6 ml-6">
              <img
                style={{ width: '280px' }}
                src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/aside_banner.jpg?1704276438486"
                alt=""
              />
            </div>
          </div>
        </div>
        <MyComponent dataproduct={dataproducts} />
      </div>
      <div className="flex justify-end">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default MenuCategory;
