import React from 'react';
import Videoitem from '../VideoItem/VideoItem';
import { Link } from 'react-router-dom';
import './Videorapper.scss';

const VideoWrapper = ({ arr, title }) => {
    return (
        <div className='videoWrapper'>
            <div className="container">
                <div className="videoWrapper__title">
                    <h3>{title}</h3>
                    <Link to={`/category/${title}`}>View More</Link>
                </div>
                <div className="videoWrapper__items">
                    {
                        arr ? arr.map((item, index) => <Videoitem key={index} item={item} />) : <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default VideoWrapper;
