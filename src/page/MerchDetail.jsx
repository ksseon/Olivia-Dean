import { useNavigate, useParams } from "react-router-dom";
import { Container, DetailStyle } from "./style";
import data from "../assets/data";
import MerchVisual from "../components/merch/MerchVisual";

const MerchDetail = () => {
  const navigate = useNavigate();
  const { merchID } = useParams();

  const thisMerch = data.find((item) => item.id === Number(merchID));

  if (!thisMerch) {
    return <div>해당 제품을 찾을 없습니다.</div>;
  }
  const { id, name, photo, price, txt, txt2 } = thisMerch;
  const onGo1 = () => {
    navigate("/");
  };
  const onGo2 = () => {
    navigate("/merch");
  };

  return (
    <Container>
      <MerchVisual />
      <DetailStyle>
        <div className="inner">
          <h2>{name}</h2>

          <article className="con-box">
            <div className="left">
              <h3>{name}</h3>
              <strong>₩{price}</strong>
              <p>
                <img src={photo} />
              </p>

              <p>
                <button onClick={onGo1}>Main</button>
                <button onClick={onGo2}>List</button>
              </p>
            </div>

            <div className="right">
              <h3>{txt}</h3>
              <h4>{txt2}</h4>
              <p>
                <button>Add To Cart</button>
                <button>Buy Now</button>
              </p>
            </div>
          </article>
        </div>
      </DetailStyle>
    </Container>
  );
};

export default MerchDetail;
