import { Link } from 'react-router-dom';

const MerchItem = ({ item }) => {
    const { id, name, photo } = item;

    return (
        <li>
            <Link to={`/merch/${id}`}>
                <h3>{name}</h3>
                <p>
                    <img src={photo} alt={name} />
                </p>
            </Link>
        </li>
    );
};

export default MerchItem;
