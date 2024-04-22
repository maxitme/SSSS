import { Card } from 'antd';
import style from './style.module.css';
import Meta from 'antd/es/card/Meta';
import { EyeOutlined, LinkOutlined, ShoppingCartOutlined } from '@ant-design/icons';
const HomeLangding = () => {
  const imgae = [
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/huong-van-cat0157-copy.jpg?v=1703156575757',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/huong-van-cat0153-copy.jpg?v=1703156594590',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/huong-van-cat0149-copy.jpg?v=1703156607183',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/huong-van-cat0149-copy.jpg?v=1703156607183',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/huong-van-cat0149-copy.jpg?v=1703156607183',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/huong-van-cat0149-copy.jpg?v=1703156607183',
  ];
  const imgaess = [
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/huong-van-cat0157-copy.jpg?v=1703156575757',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/huong-van-cat0153-copy.jpg?v=1703156594590',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/huong-van-cat0149-copy.jpg?v=1703156607183',
  ];

  const imgaes = [
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05060.jpg?v=1709469295020',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05054.jpg?v=1709469094177',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05051.jpg?v=1709468828420',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05047.jpg?v=1709468657313',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05044.jpg?v=1709468411773',
    'https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05041.jpg?v=1709468122857',
  ];

  return (
    <div>
      <div className="container">
        <div className={`${style.zoneBaner} flex justify-center`}>
          <div className={`${style.baner} grid grid-cols-4 gap-2`}>
            <div className={`${style.ho}`}>
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/436/707/collections/huong-van-cat-28-12-20222962-copy.jpg?v=1674113838233"
                alt=""
              />
              <div className={`${style.blackDiv}`}>
                VÒNG TRẦM HƯƠNG
                <div className={`${style.hiddenTextBlackDiv}`}>
                  (100 sản phẩm)
                </div>
              </div>
            </div>
            <div className={`${style.ho}`}>
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/436/707/collections/dsc00900.jpg?v=1692964389843"
                alt=""
              />
              <div className={`${style.blackDiv}`}>
                TRÀ ĐẠO
                <div className={`${style.hiddenTextBlackDiv}`}>
                  (100 sản phẩm)
                </div>
              </div>
            </div>
            <div className={`${style.ho}`}>
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/436/707/collections/huong-van-cat-28-12-20223288-copy.jpg?v=1672827509517"
                alt=""
              />
              <div className={`${style.blackDiv}`}>
                MẶT DÂY CHUYỀN
                <div className={`${style.hiddenTextBlackDiv}`}>
                  (100 sản phẩm)
                </div>
              </div>
            </div>
            <div className={`${style.ho}`}>
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/436/707/collections/dsc03735.jpg?v=1696396085893"
                alt=""
              />
              <div className={`${style.blackDiv}`}>
                KỲ NAM
                <div className={`${style.hiddenTextBlackDiv}`}>
                  (100 sản phẩm)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.zoneBanerSecond} flex justify-center mt-[100px]`}
        >
          <div className={`${style.banerSecond} grid grid-cols-2`}>
            <div className="text">
              <div className="mt-14">
                VỀ CHÚNG TÔI
                <br />
                <b className={`text-2xl ${style.b}`}>
                  HƯƠNG VÂN CÁT - HƯƠNG VÂN NGỘ QUÝ NHÂN
                </b>
                <br />
                <hr className={`${style.hr}`} />
                <i>Cửa hàng Trầm Hương - Hương Vân Cát</i>
                <br />
                Chuyên thiết kế, gia công các loại vòng tay Trầm Hương, vòng cổ
                Trầm Hương, chuỗi Trầm Hương - Kỳ Nam chất lượng cao nhất và quý
                hiếm nhất, được gia công một cách tỉ mỉ, độc đáo và tinh tế.
                <br /> Chuyên các loại bột, nhang Trầm Hương thiên nhiên nguyên
                chất và các loại phụ kiện Trầm Hương, mang lại giá trị Trầm
                Hương thiên nhiên đích thực với lời cam kết tuyệt đối về chất
                lượng sản phẩm chuẩn Trầm thật.
              </div>
              <div className="flex justify-center p-5">
                <button className={`${style.seeMore}`}>XEM THÊM</button>
                <button className={`${style.store}`}>CỬA HÀNG</button>
              </div>
            </div>
            <div className={`${style.imageContainer}`}>
              <img
                src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/section_about_banner.jpg?1704276438486"
                alt=""
              />
              <div className={`${style.backgroundAnimation}`}></div>
            </div>
          </div>
        </div>
        <div
          className={`${style.zoneBanerSecondHindden} flex justify-center mt-[100px]`}
        >
          <div
            className={`${style.banerSecondHindden} grid grid-rows-2 grid-flow-col`}
          >
            <div>
              <div className="text">
                <div className="mt-14">
                  <p className="text-center">VỀ CHÚNG TÔI</p>
                  <br />
                  <p className={`text-2xl ${style.b} text-center`}>
                    HƯƠNG VÂN CÁT - HƯƠNG VÂN NGỘ QUÝ NHÂN
                  </p>
                  <br />
                  <hr className={`${style.hrHidden}`} />
                  <i>Cửa hàng Trầm Hương - Hương Vân Cát</i>
                  <br />
                  Chuyên thiết kế, gia công các loại vòng tay Trầm Hương, vòng
                  cổ Trầm Hương, chuỗi Trầm Hương - Kỳ Nam chất lượng cao nhất
                  và quý hiếm nhất, được gia công một cách tỉ mỉ, độc đáo và
                  tinh tế.
                  <br /> Chuyên các loại bột, nhang Trầm Hương thiên nhiên
                  nguyên chất và các loại phụ kiện Trầm Hương, mang lại giá trị
                  Trầm Hương thiên nhiên đích thực với lời cam kết tuyệt đối về
                  chất lượng sản phẩm chuẩn Trầm thật.
                </div>
                <div className="flex justify-center p-5">
                  <button className={`${style.seeMore}`}>XEM THÊM</button>
                  <button className={`${style.store}`}>CỬA HÀNG</button>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/section_about_banner.jpg?1704276438486"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className={`${style.sellingProduct}`}>
          <div className="flex justify-center mt-20">
            <div>
              <div className="grid grid-rows-1 grid-flow-col">
                <div
                  className={`${style.title} text-2xl font-bold text-center`}
                >
                  SẢN PHẨM BÁN CHẠY
                  <hr className={`${style.hrs}`} />
                </div>
              </div>
              <div
                className={`${style.zoneBanerThree} grid grid-cols-4 gap-4 mt-10`}
              >
                {imgae.map((i, index) => {
                  return (
                    <div key={index} className={`${style.cardContainer}`}>
                      <Card
                        style={{ width: 270, border: '1px solid #AFAFAF' }}
                        cover={<img alt="example" src={i} />}
                        hoverable
                      >
                        <Meta title="Vòng tay trầm hương" />
                        <div className="mt-2">
                          <b className="mr-2 text-red-700">1.800.000đ</b>
                          <del>2.500.000đ</del>
                        </div>
                      </Card>
                      <div className={`${style.hiddenDiv}`}>
                        <div>
                          <LinkOutlined className="mr-2" />
                          Tùy chọn
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center mt-14">
                <div>
                  <button className={`${style.store}`}>XEM THÊM</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.sellingProductHindden}`}>
          <div className="flex justify-center mt-20">
            <div className="h-auto">
              <div className="grid grid-rows-1 grid-flow-col">
                <div
                  className={`${style.title} text-2xl font-bold text-center`}
                >
                  SẢN PHẨM BÁN CHẠY
                  <hr className={`${style.hrsHidden}`} />
                </div>
              </div>
              <div
                className={`${style.zoneBanerThreeHindden} grid grid-rows-2 gap-7 grid-flow-col  mt-10`}
              >
                {imgae.map((i, index) => {
                  return (
                    <div key={index}>
                      <Card
                        className={`${style.card}`}
                        // style={{ width: 200, border: '1px solid #AFAFAF' }}
                        cover={<img alt="example" src={i} />}
                        hoverable
                      >
                        <Meta
                          className={`${style.cardMeta}`}
                          title="Vòng tay trầm hương"
                        />
                        <div className={`${style.cardText} mt-2`}>
                          <b className="mr-2 text-red-700">1.800.000đ</b>
                          <del>2.500.000đ</del>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center mt-14">
                <div>
                  <button className={`${style.store}`}>XEM THÊM</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.zoneCollection}`}>
          <div className={`${style.end}`}></div>
          <div className="flex justify-center">
            <div>
              <div className="flex justify-center mt-20">
                <div>
                  <div className="grid grid-rows-2 grid-flow-col">
                    <div
                      className={`${style.title} text-2xl font-bold text-center ml-[23px]`}
                    >
                      BỘ SƯU TẬP
                      <hr className={`${style.hrs}`} />
                    </div>
                    <div className="w-[100%] flex justify-center mt-2">
                      <div
                        className={`${style.collectionGrid} grid grid-cols-4 grid-flow-col auto-cols-max text-center`}
                      >
                        <div className={`${style.collectionFirts}`}>
                          VÒNG TRẦM HƯƠNG
                        </div>
                        <div className={`${style.collection}`}>TRÀ ĐẠO</div>
                        <div className={`${style.collection}`}>
                          MẶT DÂY CHUYỀN
                        </div>
                        <div className={`${style.collection}`}>KỲ NAM</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${style.zoneBanerThree} grid grid-cols-4 gap-4 mt-10`}
                  >
                    {imgaes.map((i, index) => {
                      return (
                        <div
                          key={index}
                          className={`${style.cardCollectionContainer}`}
                        >
                          <Card
                            className={`${style.cardCollection}`}
                            cover={<img alt="example" src={i} />}
                            style={{ border: '1px solid #AFAFAF' }}
                            hoverable
                          >
                            <Meta title="Vòng tay trầm hương" />
                            <div className={`${style.cardTextCollection} mt-2`}>
                              <b className="mr-2 text-red-700">1.800.000đ</b>
                              <del>2.500.000đ</del>
                            </div>
                          </Card>
                          <div className={`${style.hiddenCollectionDiv}`}>
                            <div className={`${style.chooseMore}`}>
                              <div>
                                <ShoppingCartOutlined className="mr-2" />
                                Mua hàng
                              </div>
                              <div className='ml-2'>
                                <EyeOutlined  className="mr-2" />
                                Xem chi tiết
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center mt-14">
                    <div>
                      <button className={`${style.store}`}>XEM THÊM</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.zoneCollectionHidden}`}>
          <div className={`${style.end}`}></div>
          <div className="flex justify-center">
            <div>
              <div className="flex justify-center mt-20">
                <div>
                  <div className="grid grid-rows-2 grid-flow-col">
                    <div
                      className={`${style.title} text-2xl font-bold text-center ml-[23px]`}
                    >
                      BỘ SƯU TẬP
                      <hr className={`${style.hrsHidden}`} />
                    </div>
                    <div className="w-[100%] flex justify-center mt-2">
                      <div className="grid grid-cols-4 grid-flow-col auto-cols-max text-center ">
                        <div className={`${style.collectionFirtsHidden}`}>
                          TRÀ ĐẠO
                        </div>
                        <div className={`${style.collectionSecondHidden}`}>
                          VÒNG TRẦM HƯƠNG
                        </div>
                        <div className={`${style.collectionThreeHidden}`}>
                          MẶT DÂY CHUYỀN
                        </div>
                        <div className={`${style.collectionFourHidden}`}>
                          KỲ NAM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${style.zoneBanerThreeHindden} grid grid-cols-3 gap-4 mt-10`}
                  >
                    {imgaes.map((i, index) => {
                      return (
                        <div key={index}>
                          <Card
                            style={{ width: 210, border: '1px solid #AFAFAF' }}
                            cover={<img alt="example" src={i} />}
                            hoverable
                          >
                            <Meta title="Vòng tay trầm hương" />
                            <div className="mt-2">
                              <b className="mr-2 text-red-700">1.800.000đ</b>
                              <del>2.500.000đ</del>
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center mt-14">
                    <div>
                      <button className={`${style.store}`}>XEM THÊM</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.zoneCollectionPhoneHindden}`}>
          <div className="flex justify-center mt-20">
            <div className="h-auto">
              <div className="grid grid-rows-2 grid-flow-col">
                <div
                  className={`${style.title} text-2xl font-bold text-center`}
                >
                  BỘ SƯU TẬP
                  <hr className={`${style.hrsHiddenPhone}`} />
                </div>
                <div className="w-[100%] flex justify-center mt-2">
                  <div className="grid grid-cols-4 grid-flow-col auto-cols-max text-center ">
                    <div className={`${style.collectionFirtsPhoneHidden}`}>
                      TRÀ ĐẠO
                    </div>
                    <div className={`${style.collectionSecondPhoneHidden}`}>
                      VÒNG TRẦM HƯƠNG
                    </div>
                    <div className={`${style.collectionThreePhoneHidden}`}>
                      MẶT DÂY CHUYỀN
                    </div>
                    <div className={`${style.collectionFourPhoneHidden}`}>
                      KỲ NAM
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${style.zoneBanerThreeHindden} grid grid-rows-2 gap-7 grid-flow-col  mt-10`}
              >
                {imgae.map((i, index) => {
                  return (
                    <div key={index}>
                      <Card
                        className={`${style.card}`}
                        // style={{ width: 200, border: '1px solid #AFAFAF' }}
                        cover={<img alt="example" src={i} />}
                        hoverable
                      >
                        <Meta
                          className={`${style.cardMeta}`}
                          title="Vòng tay trầm hương"
                        />
                        <div className={`${style.cardText} mt-2`}>
                          <b className="mr-2 text-red-700">1.800.000đ</b>
                          <del>2.500.000đ</del>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center mt-14">
                <div>
                  <button className={`${style.store}`}>XEM THÊM</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.banerEndCollection} flex mt-10`}>
          <img
            className={`${style.imageBanerLeft}`}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9nfbXfLSpHURzZ1qq0xkCFG2NfxvN3XUfFKhiJBwUDvTI8K3a"
            alt=""
          />
          <img
            className={`${style.imageBaner}`}
            src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/slider_4.jpg?1704276438486"
            alt=""
          />
          <img
            className={`${style.imageBanerLeft}`}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9nfbXfLSpHURzZ1qq0xkCFG2NfxvN3XUfFKhiJBwUDvTI8K3a"
            alt=""
          />
        </div>

        <div
          className={`${style.banerEndCollectionHidden} flex justify-center mt-10`}
        >
          <img
            className={`${style.imageBanerLeftHidden}`}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9nfbXfLSpHURzZ1qq0xkCFG2NfxvN3XUfFKhiJBwUDvTI8K3a"
            alt=""
          />
          <img
            className={`${style.imageBanerHidden}`}
            src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/slider_4.jpg?1704276438486"
            alt=""
          />
          <img
            className={`${style.imageBanerLeftHidden}`}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9nfbXfLSpHURzZ1qq0xkCFG2NfxvN3XUfFKhiJBwUDvTI8K3a"
            alt=""
          />
        </div>

        <div>
          <div className="flex justify-center">
            <div
              className={`${style.title} text-2xl font-bold text-center mt-10`}
            >
              KIẾN THỨC TRẦM HƯƠNG & TRÀ ĐẠO
              <hr className={`${style.hrss}`} />
            </div>
          </div>
          <div>
            <div className={`${style.knowledge} flex justify-center mt-10`}>
              <div className="grid grid-cols-3 gap-4">
                {imgaess.map((i, index) => {
                  return (
                    <div key={index} className={`${style.cardKnowledgeContainer}`}>
                      <Card
                        className={`${style.cardKnowledgePhone}`}
                        cover={<img className={`${style.antCardCover}`} alt="example" src={i} />}
                        hoverable
                        style={{border:'1px solid #AFAFAF'}}
                      >
                        <div className={`${style.textKnowledgePhone}`}>
                          <b>
                            TOP NHỮNG MẪU THIẾT VÒNG TRẦM ĐẸP CHO NỮ ĐẦU NĂM
                            2024
                          </b>
                          <br />
                          <b className="mr-2 text-red-700">1.800.000đ</b>
                          <del>2.500.000đ</del>
                        </div>
                        <p>
                          Cùng Hương Vân Cát chiêm ngưỡng mẫu vòng tự thiết kế
                          đặc biệt
                        </p>
                        <Meta title="" />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`${style.knowledgeHidden} flex justify-center mt-10`}
            >
              <div className="grid grid-cols-3 gap-4">
                {imgaess.map((i, index) => {
                  return (
                    <div key={index}>
                      <Card
                        style={{ width: 210, border: '1px solid #AFAFAF' }}
                        cover={<img alt="example" src={i} />}
                        hoverable
                      >
                        <div className="">
                          <b>
                            TOP NHỮNG MẪU THIẾT VÒNG TRẦM ĐẸP CHO NỮ ĐẦU NĂM
                            2024
                          </b>
                          <br />
                          <b className="mr-2 text-red-700">1.800.000đ</b>
                          <del>2.500.000đ</del>
                        </div>
                        <p>
                          Cùng Hương Vân Cát chiêm ngưỡng mẫu vòng tự thiết kế
                          đặc biệt
                        </p>
                        <Meta title="" />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center mt-14">
              <div>
                <button className={`${style.store}`}>XEM THÊM</button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <div
                className={`${style.title} text-2xl font-bold text-center mt-10`}
              >
                VIDEO TRẦM HƯƠNG - KỲ NAM
                <hr className={`${style.hrsss}`} />
              </div>
            </div>

            <div className={`${style.knowledge} flex justify-center mt-10`}>
              <div className="grid grid-cols-3 gap-4">
                {imgaess.map((i, index) => {
                  return (
                    <div key={index} className={`${style.cardKnowledgeContainer}`}>
                      <Card
                        className={`${style.cardKnowledgePhone}`}
                        cover={<img alt="example" className={`${style.antCardCover}`} src={i} />}
                        hoverable
                        style={{border:'1px solid #AFAFAF'}}
                      >
                        <div className={`${style.textKnowledgePhone}`}>
                          <b>
                            TOP NHỮNG MẪU THIẾT VÒNG TRẦM ĐẸP CHO NỮ ĐẦU NĂM
                            2024
                          </b>
                          <br />
                          <b className="mr-2 text-red-700">1.800.000đ</b>
                          <del>2.500.000đ</del>
                        </div>
                        <p>
                          Cùng Hương Vân Cát chiêm ngưỡng mẫu vòng tự thiết kế
                          đặc biệt
                        </p>
                        <Meta title="" />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`${style.knowledgeHidden} flex justify-center mt-10`}
            >
              <div className="grid grid-cols-3 gap-4">
                {imgaess.map((i, index) => {
                  return (
                    <div key={index}>
                      <Card
                        style={{ width: 210, border: '1px solid #AFAFAF' }}
                        cover={<img alt="example" src={i} />}
                        hoverable
                        
                      >
                        <div className="">
                          <b>
                            TOP NHỮNG MẪU THIẾT VÒNG TRẦM ĐẸP CHO NỮ ĐẦU NĂM
                            2024
                          </b>
                          <br />
                          <b className="mr-2 text-red-700">1.800.000đ</b>
                          <del>2.500.000đ</del>
                        </div>
                        <p>
                          Cùng Hương Vân Cát chiêm ngưỡng mẫu vòng tự thiết kế
                          đặc biệt
                        </p>
                        <Meta title="" />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <div>
              <button className={`${style.store}`}>XEM THÊM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLangding;
