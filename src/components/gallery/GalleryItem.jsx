import React from 'react';
import { GalleryItemStyle } from './style';

const GalleryItem = ({ item }) => {
    const { user, downloads, views, likes, webformatURL, tags } = item;
    const tagArr = tags.split(',');

    return (
        <GalleryItemStyle>
            <img src={webformatURL} alt={user} />
            <h3></h3>
            <ul>
                <li>Views : {views}</li>
                <li>Download : {downloads}</li>
                <li>Likes : {likes}</li>
            </ul>
            <p>
                {tagArr.map((item) => (
                    <span key={item}>#{item.trim()} </span>
                ))}
            </p>
        </GalleryItemStyle>
    );
};

export default GalleryItem;
