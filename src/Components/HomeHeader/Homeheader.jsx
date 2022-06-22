import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PlayBtn from "../../Assets/svg/PlayButton.svg";
import './HomeHeader.scss'

const Homeheader = ({ arr }) => {
    const imgRef = useRef()

    if (!arr) {
        return <div className="container">
            <h2 style={{ margin: "60px 0 160px" }}>Movies not found</h2>
        </div>
    }
    
    return (
        <header className='homeHeader'>
            <img className='homeHeader__bg' ref={imgRef} src={arr[0].Poster} alt="img" />
            <div className="container">
                <div className="homeHeader__movie">
                    <Link to="/movies">
                        <img src={PlayBtn} alt="icon" />
                    </Link>
                    <div className="homeHeader__info">
                        <h1 className='homeHeader__title'>{arr[0].Title}</h1>
                        <p className='homeHeader__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p className='homeHeader__detalist'>Genre : Adventure</p>
                        <p className='homeHeader__detalist'>Duration : 2 hr 45 mins</p>
                        <p className='homeHeader__detalist'>Ratings : 4.5</p>
                    </div>
                </div>

                <div className="homeHeader__trailer">
                    <h4>Trailers</h4>
                    <div className="homeHeader__cards">
                        <div className="card" onClick={() => imgRef.current.setAttribute("src", arr[1].Poster)}>
                            <img src={arr[1].Poster} alt="img" />
                            <span>01</span>
                        </div>
                        <div className="card" onClick={() => imgRef.current.setAttribute("src", arr[2].Poster)}>
                            <img src={arr[2].Poster} alt="img" />
                            <span>02</span>
                        </div>
                        <div className="card" onClick={() => imgRef.current.setAttribute("src", arr[3].Poster)}>
                            <img src={arr[3].Poster} alt="img" />
                            <span>03</span>
                        </div>
                        <div className="card" onClick={() => imgRef.current.setAttribute("src", arr[4].Poster)}>
                            <img src={arr[4].Poster} alt="img" />
                            <span>04</span>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Homeheader;
