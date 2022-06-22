import React, { useContext, useRef } from 'react';
import "./Layout.scss";
import { Navigate, NavLink, Outlet, Link } from 'react-router-dom';
import Logo from "../../Assets/svg/Watchflix.svg";
import searchIcon from "../../Assets/svg/search.svg";
import btnIcon from "../../Assets/svg/Vector.svg";
import map from "../../Assets/svg/map.svg";
import mail from "../../Assets/svg/mail.svg";
import tel from "../../Assets/svg/Phone.svg";
import { LoginContext } from '../../Provider/LoginProvider';
import { MovieContext } from '../../Provider/MovieProvider';

const Layout = () => {
    const { token, setToken } = useContext(LoginContext);
    const { setTitle } = useContext(MovieContext)
    const iconRef = useRef()
    const labelRef = useRef()
    const inputRef = useRef()

    if (!token) {
        return <Navigate to="login" />
    }

    function openInput() {
        iconRef.current.style.display = "none"
        labelRef.current.style.display = "flex"
    }

    function closeInput() {
        iconRef.current.style.display = "flex"
        labelRef.current.style.display = "none"
    }

    function logout() {
        localStorage.removeItem('token')
        setToken(false)
    }

    return (
        <>
            {
                token ? <nav className='navbar'>
                    <div className="container">
                        <div className="navbar__block">
                            <span className='nav__wraper'>
                                <img src={Logo} alt="Logo" />
                                <ul className='navbar__list'>
                                    <NavLink className='navbar__list__link' to={"/"}>Home</NavLink>
                                    <NavLink className='navbar__list__link' to={"movies"}>Movies</NavLink>
                                    <NavLink className='navbar__list__link' to={"category"}>Category</NavLink>
                                </ul>
                            </span>
                            <span className='nav__wraper'>
                                <label className='navbar__label' ref={labelRef}>
                                    <input ref={inputRef} type="text" placeholder='Enter search phrase..' />
                                    <Link to="/search" onClick={() => {
                                        closeInput();
                                        setTitle(inputRef.current.value)
                                    }}>
                                        <img src={searchIcon} alt="icon" />
                                    </Link>
                                </label>
                                <img className='navbar__icon' src={searchIcon} alt="icon" onClick={openInput} ref={iconRef} />
                                <span className='nav__wraper'>
                                    <img className='navbar__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png" alt="" />
                                    <p className='navbar__name'>John Glich</p>
                                    <span className='drobDown' onClick={logout}>Logout</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </nav> : <></>
            }

            <Outlet />

            {
                token ? <footer className='footer'>
                    <span className="bg"></span>
                    <div className="container">
                        <div className="footer__block">
                            <div className="footer__info">
                                <h3 className='footer__info__title'>Watchflix</h3>
                                <p className='footer__info__text'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                <p className='footer__info__name'>Join Newsletters</p>
                                <label className='footer__info__label'>
                                    <input className='footer__info__input' type="email" placeholder='Insert your mail here' />
                                    <button className='footer__info__btn' type='button'>
                                        <img src={btnIcon} alt="icon" />
                                    </button>
                                </label>
                            </div>

                            <div>
                                <div className='footer__links'>
                                    <ul className='footer__list'>
                                        <li className='footer__list__name'>Product</li>
                                        <li className='footer__list__item'>Movies</li>
                                        <li className='footer__list__item'>TV Show</li>
                                        <li className='footer__list__item'>Videos</li>
                                    </ul>
                                    <ul className='footer__list'>
                                        <li className='footer__list__name'>Media Group</li>
                                        <li className='footer__list__item'>Nice Studio</li>
                                        <li className='footer__list__item'>Nice News</li>
                                        <li className='footer__list__item'>Nice TV</li>
                                    </ul>
                                    <ul className='footer__list'>
                                        <li className='footer__list__name'>Sitemap</li>
                                        <li className='footer__list__item'>About</li>
                                        <li className='footer__list__item'>Careers</li>
                                        <li className='footer__list__item'>Press</li>
                                    </ul>
                                </div>

                                <div className="footer__contacts">
                                    <span className='footer__contacts__item'>
                                        <img className='footer__contacts__icon' src={map} alt="" />
                                        <p className='footer_contacts__text'>8819 Ohio St. South Gate, California 90280</p>
                                    </span>
                                    <span className='footer__contacts__item'>
                                        <img className='footer__contacts__icon' src={mail} alt="" />
                                        <p className='footer_contacts__text'>ourstudio@hello.com</p>
                                    </span>
                                    <span className='footer__contacts__item'>
                                        <img className='footer__contacts__icon' src={tel} alt="" />
                                        <p className='footer_contacts__text'>+271 386-647-3637</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> : <></>
            }
        </>
    );
}

export default Layout;
