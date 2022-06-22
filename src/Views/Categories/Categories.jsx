import React, { useContext } from 'react';
import VideoWrapper from '../../Components/VideoWrapper/VideoWrapper';
import { MovieContext } from '../../Provider/MovieProvider';

const Categories = () => {
    const { movies } = useContext(MovieContext)
    return (
        <>
            <VideoWrapper arr={movies.Search.slice(0, 5)} title="Top Movies" />
            <VideoWrapper arr={movies.Search.slice(5, 10)} title="Horror films" />
            <VideoWrapper arr={movies.Search.slice(0, 5)} title="Comedy" />
            <VideoWrapper arr={movies.Search.slice(5, 10)} title="TV Shows" />
            <VideoWrapper arr={movies.Search.slice(0, 5)} title="Trillers" />
        </>
    );
}

export default Categories;
