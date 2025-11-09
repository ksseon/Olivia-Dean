import { NavStyle } from './style';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <NavStyle>
            <ul>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/gallery">GALLERY</Link>
                </li>
                <li>
                    <Link to="/merch">MERCH</Link>
                </li>
                <li>
                    <Link to="/board">TOUR</Link>
                </li>
            </ul>
        </NavStyle>
    );
};

export default Nav;
