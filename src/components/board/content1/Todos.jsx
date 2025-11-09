import { useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import TodosTable from './TodosTable';
import Pagination from './Pagination';
import { ContentStyle } from './style';
import { Link } from 'react-router-dom';

const Todos = () => {
    const url = `https://gist.githubusercontent.com/ksseon/d593ed81d469a46f01bfd6e6f6fe2e7b/raw/4d22cf4b0f1ac60bc26de5d130e315ffbe086a03/tourList`;
    const { state: posts, loading, error } = useAxios(url);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;
    const totalPage = posts.length;
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const pageNumber = Math.ceil(totalPage / postsPerPage);
    const currentPosts = posts.slice(firstPost, lastPost);

    const onCurrent = (id) => {
        setCurrentPage(id);
    };

    return (
        <ContentStyle>
            <div className="inner">
                <h2>LIVE CONCERT TOUR : {totalPage}</h2>
                <TodosTable currentPosts={currentPosts} loading={loading} />
                <Pagination
                    pageNumber={pageNumber}
                    onCurrent={onCurrent}
                    currentPage={currentPage}
                />
            </div>
        </ContentStyle>
    );
};

export default Todos;
