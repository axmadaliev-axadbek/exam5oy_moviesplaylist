import React, { useContext } from 'react';
import Singleheader from '../../Components/singelHeader/SingleHeader';
import VideoWrapper from '../../Components/VideoWrapper/VideoWrapper';
import { MovieContext } from '../../Provider/MovieProvider';

const Movies = () => {
    const { movies, loading } = useContext(MovieContext)

    if (!movies.Search) {
        return <div className="container">
            <h2 style={{ margin: "60px 0 160px" }}>Movies not found</h2>
        </div>
    }

    return (
        <>
            <Singleheader />
            <VideoWrapper arr={movies.Search.slice(0, 5)} title="Last watch" />
            <VideoWrapper arr={movies.Search.slice(5, 10)} title="Top Movies" />
            <VideoWrapper arr={movies.Search.slice(0, 5)} title="Top TV Show" />
        </>
    );
}

export default Movies;
