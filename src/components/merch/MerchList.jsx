import MerchItem from "./MerchItem";
import data from "../../assets/data";
import { MerchUl } from "./style";

const MerchList = () => {
  return (
    <MerchUl>
      {data.map((item) => (
        <MerchItem key={item.id} item={item} />
      ))}
    </MerchUl>
  );
};

export default MerchList;
