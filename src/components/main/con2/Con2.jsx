import { Content2 } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Con2 = () => {
  return (
    <Content2>
      <h2>Who is she?</h2>
      <p>
        올리비아딘(Olivia Dean)은 영국의 싱어송라이터로 우아한 소울이 돋보이는
        유니크한 음색의 소유자이며 <br></br>빈티지한 분위기를 풍기는 떠오르는
        여성 아티스트이다. 1999년 영국 런던에서 태어났고<br></br> 음악적 재능이
        다분했던 그녀는 8세부터 가스펠을 통해 공연했고, 10대가 되자 가수의 꿈을
        키워오며<br></br> 아티스트 양성에 명성 높은 BRIT스쿨에 입학해 작곡을
        배웠다.
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/photo_1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/photo_2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/photo_3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/photo_4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/photo_5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/photo_6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/photo_7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/photo_8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/photo_9.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </Content2>
  );
};

export default Con2;
