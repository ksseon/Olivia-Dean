import { AboutVisualStyle } from "./style";

const AboutVisual = () => {
  return (
    <AboutVisualStyle>
      <div className="inner">
        <div className="txt">
          <h2>
            "Wanna listen to <br></br> <span>Olivia Dean?"</span>
          </h2>
          <p>2025 북미 투어, 신보 및 화보 활동 예고</p>
          <p>2024 대규모 헤드라이너 투어, 패션 브랜드 앰배서더 활동</p>
          <p>
            2023 첫 정규 앨범 Messy 발표, 머큐리 프라이즈 후보 및 글로벌
            페스티벌 무대
          </p>
          <p>2020–21 Amazon & BBC 수상, 브레이크스루 아티스트로 급부상</p>
          <p>2018–19 EP 발표 및 첫 싱글로 존재감 입증</p>
          <p>2017 Rudimental 백업 보컬로 데뷔</p>
        </div>

        <div className="pic">
          <img src="/about_0.jpg" alt="" />
          <img src="/about_1.jpg" alt="" />
          <img src="/about_2.png" alt="" />
        </div>

        <div className="btn">
          <a href="#" />
          <p>More music</p>
          <img src="/btn_arrow.png" alt="#" />
        </div>
      </div>
    </AboutVisualStyle>
  );
};

export default AboutVisual;
