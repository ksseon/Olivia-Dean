import GalleryItem from './GalleryItem';
import Masonry from 'react-masonry-css';
import { GalleryListStyle } from './style';

const GalleryList = ({ data }) => {
    return (
        <GalleryListStyle>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {data.map((item) => (
                    <GalleryItem key={item.id} item={item} />
                ))}
            </Masonry>
        </GalleryListStyle>
    );
};

export default GalleryList;
