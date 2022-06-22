import React, { useContext } from 'react';
import Homeheader from '../../Components/HomeHeader/Homeheader';
import HomeWatch from '../../Components/HomeWatch/HomeWatch';
import VideoWrapper from '../../Components/VideoWrapper/VideoWrapper';
import { MovieContext } from '../../Provider/MovieProvider';

const Home = () => {

    const { movies, loading } = useContext(MovieContext)

    if (!movies.Search) {
        return <div className="container">
            <h2 style={{ margin: "60px 0 160px" }}>Movies not found</h2>
        </div>
    }

    return (
        <div>

            <Homeheader arr={movies.Search} />
            <VideoWrapper arr={movies.Search.slice(0, 5)} title="Last Watch" />
            <VideoWrapper arr={movies.Search.slice(5, 10)} title="Top Movies" />
            <VideoWrapper arr={movies.Search.slice(0, 5)} title="Top TV Show" />
            <HomeWatch arr={movies.Search} />

        </div>
    );
}

export default Home;
