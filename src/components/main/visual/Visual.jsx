import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container } from "./style";
import { Pagination, Navigation } from "swiper/modules";

const Visual = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <iframe
            width="1920"
            height="716"
            src="https://www.youtube.com/embed/72p1VhZhlMU?list=RD72p1VhZhlMU"
            title="Olivia Dean - The Hardest Part"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="1920"
            height="716"
            src="https://www.youtube.com/embed/COYkXwMc4ck?list=RD72p1VhZhlMU"
            title="Olivia Dean - Be My Own Boyfriend (Unofficial Video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="1920"
            height="716"
            src="https://www.youtube.com/embed/NM4e606yFJg?list=RDNM4e606yFJg"
            title="Olivia Dean - Dive"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Visual;
