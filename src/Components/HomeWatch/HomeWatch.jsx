import React from 'react';
import PlayIcon from "../../Assets/svg/HomePlay.svg";
import "./HomeWatch.scss";
import clock from "../../Assets/svg/sectionClock.svg"
import calendar from "../../Assets/svg/Calendar.svg";
import { Link } from 'react-router-dom';

const HomeWatch = ({ arr }) => {
    if (!arr) {
        return <></>
    }

    return (
        <section className='homeSection'>
            <div className="container">
                <div className="wraper">
                    <Link to="movies" className="section__film">
                        <img className='section__film__bg' src={arr[5].Poster} alt="img"/>
                        <img className='section__film__icon' src={PlayIcon} alt="img" />
                        <h3 className="section__film__title">{arr[5].Title}</h3>
                        <p className='section__film__desc'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </Link>

                    <div className="section__cards">
                        <Link to="movies" className="section__card">
                            <div className="section__card__poster">
                                <img className='section__card__poster__bg' src={arr[6].Poster} alt="img" />
                                <img className='section__card__poster__icon' src={PlayIcon} alt="icon" />
                            </div>
                            <div className="section__card__info">
                                <p className="section__card__desc">Episode 1</p>
                                <h4 className='section__card__title'>{arr[6].Title}</h4>
                                <p className="section__card__desc">Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>
                                <span>
                                    <div className="section__date">
                                        <img src={clock} alt="icon" />
                                        <p>1hr 24mins</p>
                                    </div>
                                    <div className="section__date">
                                        <img src={calendar} alt="icon" />
                                        <p>June 2, 2021</p>
                                    </div>
                                </span>
                            </div>
                        </Link>

                        <Link to="movies" className="section__card">
                            <div className="section__card__poster">
                                <img className='section__card__poster__bg' src={arr[7].Poster} alt="img" />
                                <img className='section__card__poster__icon' src={PlayIcon} alt="icon" />
                            </div>
                            <div className="section__card__info">
                                <p className="section__card__desc">Episode 1</p>
                                <h4 className='section__card__title'>{arr[7].Title}</h4>
                                <p className="section__card__desc">Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>
                                <span>
                                    <div className="section__date">
                                        <img src={clock} alt="icon" />
                                        <p>1hr 24mins</p>
                                    </div>
                                    <div className="section__date">
                                        <img src={calendar} alt="icon" />
                                        <p>June 2, 2021</p>
                                    </div>
                                </span>
                            </div>
                        </Link>

                        <Link to="movies" className="section__card">
                            <div className="section__card__poster">
                                <img className='section__card__poster__bg' src={arr[8].Poster} alt="img" />
                                <img className='section__card__poster__icon' src={PlayIcon} alt="icon" />
                            </div>
                            <div className="section__card__info">
                                <p className="section__card__desc">Episode 1</p>
                                <h4 className='section__card__title'>{arr[8].Title}</h4>
                                <p className="section__card__desc">Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>
                                <span>
                                    <div className="section__date">
                                        <img src={clock} alt="icon" />
                                        <p>1hr 24mins</p>
                                    </div>
                                    <div className="section__date">
                                        <img src={calendar} alt="icon" />
                                        <p>June 2, 2021</p>
                                    </div>
                                </span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HomeWatch;
