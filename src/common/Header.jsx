import { Link } from "react-router-dom";
import { HeaderStyle, InnerStyle } from "./style";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderStyle>
      <InnerStyle className="inner">
        <h1>
          <Link to="/">
            <img src="/olivia-dean.png" alt="" />
          </Link>
        </h1>
        <Nav />
      </InnerStyle>
    </HeaderStyle>
  );
};

export default Header;
