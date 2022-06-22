import React from 'react';
import { Link } from 'react-router-dom';
import "./VideoItem.scss"
import clock from "../../Assets/svg/clock.svg"
import eye from "../../Assets/svg/eye.svg"

const Videoitem = ({ item }) => {
    return (
        <Link to="/movies" onClick={() => window.scrollTo(0, 0)} className='videoItem'>
            <img src={item.Poster} alt="img" />
            <span className='videoItem__genres'>Fantasy</span>

            <div className="videoItem__info">
                <span className='videoItem__wraper'>
                    <div className="videoItem__info__icon">
                        <img src={clock} alt="icon" />
                        <p>1hr 24mins</p>
                    </div>
                    <div className="videoItem__info__icon">
                        <img src={eye} alt="icon" />
                        <p>1hr 24mins</p>
                    </div>
                </span>
                <h3 className='videoItem__info__title'>{item.Title}</h3>
            </div>
        </Link>
    );
}

export default Videoitem;
