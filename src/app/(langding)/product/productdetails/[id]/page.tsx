'use client';
import { useEffect, useState } from 'react';
import style from './style.module.css';
import {
  DollarOutlined,
  FieldTimeOutlined,
  RubyOutlined,
} from '@ant-design/icons';
import { getDataProductDetails, sellProduct } from './test';
export default function ProductDeatils() {
  const [src, setSrc] = useState(
    'https://bizweb.dktcdn.net/thumb/1024x1024/100/436/707/products/dsc05136.jpg?v=1709469649240'
  );
  const [border, setBorder] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const arrImage = [
    'https://bizweb.dktcdn.net/thumb/compact/100/436/707/products/dsc05136.jpg?v=1709469649240',
    'https://bizweb.dktcdn.net/thumb/compact/100/436/707/products/dsc05060.jpg?v=1709469295020',
    'https://bizweb.dktcdn.net/thumb/compact/100/436/707/products/dsc05107.jpg?v=1709469299863',
    'https://bizweb.dktcdn.net/thumb/compact/100/436/707/products/dsc05063.jpg?v=1709469304147',
    'https://bizweb.dktcdn.net/thumb/compact/100/436/707/products/dsc05061.jpg?v=1709469308070',
    'https://bizweb.dktcdn.net/thumb/compact/100/436/707/products/dsc05108.jpg?v=1709469312260',
  ];
  const handelGetSrc = (src, index) => {
    setSrc(src.target.currentSrc);
    setBorder(index);
  };

  const [dataproduct, setDataProduct] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [dataquantity, setdataquantity] = useState();
  const initialData = async id => {
    const fetchData = async () => {
      try {
        const response = await getDataProductDetails(Number(id)).then(
          res => res.data
        );
        setdataquantity(response.WarehouseDetails[0].quantity, 'ga');
        setDataProduct(response);
      } catch (error) {
        return error;
      }
    };
    fetchData();
  };

  const handleInputChange = e => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity <= dataproduct.WarehouseDetails[0].quantity) {
      if (!isNaN(newQuantity) && newQuantity >= 1) {
        setQuantity(newQuantity);
      }
    }
  };

  const handlePurchase = () => {
    const orderDetails = {
      ...dataproduct,
      quantity: quantity,
    };
    const fetchData = async () => {
      try {
        const response = await sellProduct(orderDetails.id, orderDetails);
        setReloadData(true);
        // setdataquantity()
        // initialData();
      } catch (error) {
        return error;
      }
    };
    fetchData();
  };

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const id = pathArray[pathArray.length - 1];
    initialData(id);
    setReloadData(false);
  }, [reloadData]);
  return (
    <div className="flex justify-center mw-[100%] mt-6">
      <div>
        <div className={`${style.move}`}>
          Trang chủ » Vòng trầm đơn cho nữ » Vòng tay Trầm Hương chìm nước 6 li
          Hiếm mix Cẩm Thạch và charm vàng ( kiểu 17 )
        </div>
        <div className="grid grid-cols-2 gap2">
          <div>
            <div className={`${style.imgProductDetails}`}>
              <img src={src} alt="" />
            </div>
            <div className="flex ml-[100px] mt-2">
              {arrImage.map((i, index) => {
                return (
                  <div
                    className={border === index ? 'border border-red-700' : ''}
                    key={index}
                  >
                    <img
                      onClick={src => handelGetSrc(src, index)}
                      className={`${style.chooseImageProduct}`}
                      src={i}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${style.text}`}>
            <h1 className="font-bold text-2xl">
              VÒNG TAY TRẦM HƯƠNG CHÌM NƯỚC 6 LI HIẾM MIX CẨM THẠCH VÀ CHARM
              VÀNG ( KIỂU 17 )
            </h1>
            <div className="border-b-2 border-gray-500 w-[510px]">
              <p>
                <b>MÃ SP:</b> VTC13E | <b>LOẠI:</b> VÒNG TAY TRẦM HƯƠNG
              </p>
              <p>
                <b>TÌNH TRẠNG:</b> CÒN {dataquantity} SẢN PHẨM
              </p>
            </div>
            <div className="border-b-2 border-gray-500 w-[510px] mt-5">
              <p className="font-bold">THÔNG TIN SẢN PHẨM</p>
              <ul className={`${style.ul} mb-5`}>
                <li>
                  Vòng tay được làm từ nguyên liệu Trầm chìm tự nhiên rất hiếm
                  có
                </li>
                <li>
                  Sản phẩm có màu nâu đen ánh đỏ rất đẹp , hương ngọt thanh dịu
                  , thoảng hương ngọt béo sâu khi đeo
                </li>
                <li>
                  Hạt trầm gia công tỉ mỉ bằng máy , size hạt tròn 6 li rất hiếm
                  rất đẹp
                </li>
                <li>
                  Vòng được mix charm vàng thật , cẩm thạch nước A , phỉ thúy ,
                  đá Tây Tạng rất đẹp , mang đến sự sang trọng nhẹ nhàng cho tay
                  nữ
                </li>
                <li>
                  Quý khách có thể đưa ra ý tưởng thiết kế phù hợp với gu thẩm
                  mỹ , showroom sẵn sàng thực hiện ý tưởng ( với dây chất lượng
                  cao )
                </li>
                <li>Cam kết hoàn tiền gấp 5 lần nếu phát hiện hàng giả.</li>
              </ul>
            </div>
            <div className="mt-5">
              <h1 className="text-3xl font-bold text-red-700">
                {dataproduct.price * quantity}₫
              </h1>
            </div>
            <div className="flex mt-5">
              <p>Số lượng:</p>
              <div className="ml-5">
                <button
                  onClick={() =>
                    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                  }
                  className={`${style.buttonQuantity}`}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  className={`${style.inputQuantity}`}
                  onChange={handleInputChange}
                  // readOnly
                  // defaultValue={quantity}
                />
                <button
                  onClick={() =>
                    dataproduct.WarehouseDetails[0].quantity > quantity
                      ? setQuantity(quantity + 1)
                      : ''
                  }
                  className={`${style.buttonQuantity}`}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex mt-5">
              <div className={`${style.cart}`}>THÊM VÀO GIỎ HÀNG</div>
              <div className={`${style.buyNow}`} onClick={handlePurchase}>
                MUA NGAY
              </div>
            </div>
            <div>
              <div className="mt-5">
                Gọi: 0901725199 để được tư vấn và mua hàng.
              </div>
              <div className="flex mt-2">
                <div className={`${style.show}`}>
                  <RubyOutlined />
                  <p>Bảo hành miễn phí</p>
                </div>
                <div className={`${style.show}`}>
                  <FieldTimeOutlined />
                  <p>Giao hàng tận nơi - nhanh chóng</p>
                </div>
                <div className={`${style.show}`}>
                  <DollarOutlined />
                  <p>Thanh toán nhanh chóng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
