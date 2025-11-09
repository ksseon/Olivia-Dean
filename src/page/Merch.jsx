import { Container } from "./style";
import MerchVisual from "../components/merch/MerchVisual";
import Content from "../components/merch/Content";
// import MerchDetail from './MerchDetail';

const Merch = () => {
  return (
    <Container>
      <MerchVisual />
      <Content />
    </Container>
  );
};

export default Merch;
