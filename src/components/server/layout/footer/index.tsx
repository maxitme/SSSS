import { ShareAltOutlined } from '@ant-design/icons';
import style from './style.module.css';
const Footer = () => {
  return (
    <div className={`${style.footer}`}>
      <div className={`${style.footerUnHidden} flex justify-center mt-10 p-10`}>
        <div className="grid grid-cols-4 w-[1200px]">
          <div>
            <b>VỀ CHÚNG TÔI</b>
            <div className="mt-5">
              <b>HƯƠNG VÂN CÁT</b>
              <br />
              <p className="mt-2">
                <b>Chi nhánh 1</b>: 122 Nguyễn Minh Hoàng, Phường 12, Quận Tân
                Bình, TP Hồ Chí Minh
              </p>
              <p className="mt-2">
                <b>Chi nhánh 2</b>: 274 Lê Trọng Tấn, Phường Khương Mai, Quận
                Thanh Xuân, Tp. Hà Nội
              </p>
              <p className="mt-2">Điện thoại: 0901725199</p>
              <p className="mt-2">
                Website: <a href="http://">huongvancat.vn</a>
              </p>
              <p className="mt-2">KẾT NỐI VỚI CHÚNG TÔI</p>
              <div className="flex mt-2">
                <img
                  className={`${style.imgContact}`}
                  src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_facebook_icon.svg?1704276438486"
                  alt=""
                />
                <img
                  className={`${style.imgContact}`}
                  src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_instagram_icon.svg?1704276438486"
                  alt=""
                />
                <img
                  className={`${style.imgContact}`}
                  src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_zalo_icon.svg?1704276438486"
                  alt=""
                />
                <img
                  className={`${style.imgContact}`}
                  src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_youtube_icon.svg?1704276438486"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-[200px] ml-[50px]">
            <b>THÔNG TIN</b>
            <div className="mt-5">
              <ul>
                <li className="mb-2">- Chính sách bảo mật</li>
                <li className="mb-2">- Chính sách vận chuyển</li>
                <li className="mb-2">- Chính sách đổi trả</li>
                <li className="mb-2">- Quy định sử dụng</li>
                <li className="mb-2">- Chính sách thanh toán</li>
              </ul>
            </div>
          </div>
          <div>
            <b>ĐĂNG KÝ NHẬN TIN</b>
            <div className="mt-5">
              <p>
                Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn
                nữa.
              </p>
              <div className="my-2">
                <input
                  placeholder="Nhập email..."
                  type="text"
                  className={`${style.inputMail}`}
                />
                <button className={`${style.btnResignter}`}>ĐĂNG KÝ</button>
              </div>
              <b>CHỨNG NHẬN</b>
              <div className="flex">
                <img
                  src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/bocongthuong_1.png?1704276438486"
                  alt=""
                />
                <img
                  src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/bocongthuong_2.png?1704276438486"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <b>FANPAGE</b>
            <div className={`${style.fanpage} p-2 mt-[29px]`}>
              <div className="p-2 flex rounded-sm">
                <img
                  className={`${style.fanpageItem}`}
                  src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/410622419_737312908419676_4571323902926525672_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TIuKa2wUXVoAX9i-EtJ&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDxPo5KAgBh5dZFPcjX9S4bsy6HOpJ_D99CcJww2tzr1g&oe=66016CFC"
                  alt=""
                />
                <div className="text-white ml-1">
                  <h3>Trầm hương Hương Vân Cát</h3>
                  <p>23.457 người theo dõi</p>
                </div>
              </div>
              <div className="flex justify-between w-[290px] ml-2 rounded-sm">
                <div className="flex bg-white p-1">
                  <img
                    className="w-[20px]"
                    src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_facebook_icon.svg?1704276438486"
                    alt=""
                  />
                  <p>Theo dõi trang</p>
                </div>
                <div className="flex bg-white p-1">
                  <span>
                    <ShareAltOutlined />
                  </span>
                  <p>Theo dõi trang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.footerHidden} flex justify-center mt-10 p-10`}>
        <div>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className={`${style.textFooter}`}>
              <b>VỀ CHÚNG TÔI</b>
              <div className="mt-5">
                <b>HƯƠNG VÂN CÁT</b>
                <br />
                <p className="mt-2">
                  <b>Chi nhánh 1</b>: 122 Nguyễn Minh Hoàng, Phường 12, Quận Tân
                  Bình, TP Hồ Chí Minh
                </p>
                <p className="mt-2">
                  <b>Chi nhánh 2</b>: 274 Lê Trọng Tấn, Phường Khương Mai, Quận
                  Thanh Xuân, Tp. Hà Nội
                </p>
                <p className="mt-2">Điện thoại: 0901725199</p>
                <p className="mt-2">
                  Website: <a href="http://">huongvancat.vn</a>
                </p>
                <p className="mt-2">KẾT NỐI VỚI CHÚNG TÔI</p>
                <div className="flex mt-2">
                  <img
                    className={`${style.imgContact}`}
                    src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_facebook_icon.svg?1704276438486"
                    alt=""
                  />
                  <img
                    className={`${style.imgContact}`}
                    src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_instagram_icon.svg?1704276438486"
                    alt=""
                  />
                  <img
                    className={`${style.imgContact}`}
                    src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_zalo_icon.svg?1704276438486"
                    alt=""
                  />
                  <img
                    className={`${style.imgContact}`}
                    src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_youtube_icon.svg?1704276438486"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-column-2 grid-flow-col gap-10">
              <div>
                <b>THÔNG TIN</b>
                <div className="mt-5">
                  <ul>
                    <li className="mb-2">- Chính sách bảo mật</li>
                    <li className="mb-2">- Chính sách vận chuyển</li>
                    <li className="mb-2">- Chính sách đổi trả</li>
                    <li className="mb-2">- Quy định sử dụng</li>
                    <li className="mb-2">- Chính sách thanh toán</li>
                  </ul>
                </div>
              </div>
              <div>
                <b>ĐĂNG KÝ NHẬN TIN</b>
                <div className="mt-5">
                  <p>
                    Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều
                    hơn nữa.
                  </p>
                  <div className="my-2">
                    <input
                      placeholder="Nhập email..."
                      type="text"
                      className={`${style.inputMail}`}
                    />
                    <button className={`${style.btnResignter}`}>ĐĂNG KÝ</button>
                  </div>
                  <b>CHỨNG NHẬN</b>
                  <div className="flex">
                    <img
                      src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/bocongthuong_1.png?1704276438486"
                      alt=""
                    />
                    <img
                      src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/bocongthuong_2.png?1704276438486"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <b>FANPAGE</b>
              <div className={`${style.fanpage} p-2 mt-[10px]`}>
                <div className="p-2 flex rounded-sm">
                  <img
                    className={`${style.fanpageItem}`}
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/410622419_737312908419676_4571323902926525672_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TIuKa2wUXVoAX9i-EtJ&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDxPo5KAgBh5dZFPcjX9S4bsy6HOpJ_D99CcJww2tzr1g&oe=66016CFC"
                    alt=""
                  />
                  <div className="text-white ml-1">
                    <h3>Trầm hương Hương Vân Cát</h3>
                    <p>23.457 người theo dõi</p>
                  </div>
                </div>
                <div className="flex justify-between w-[290px] ml-2 rounded-sm">
                  <div className="flex bg-white p-1">
                    <img
                      className="w-[20px]"
                      src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/social_facebook_icon.svg?1704276438486"
                      alt=""
                    />
                    <p>Theo dõi trang</p>
                  </div>
                  <div className="flex bg-white p-1">
                    <span>
                      <ShareAltOutlined />
                    </span>
                    <p>Theo dõi trang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.footerEnd} flex justify-center`}>
        <p>
          © Bản quyền thuộc về <b>Hương Vân Cát</b> | Cung cấp bởi Sapo
        </p>
      </div>
    </div>
  );
};

export default Footer;
