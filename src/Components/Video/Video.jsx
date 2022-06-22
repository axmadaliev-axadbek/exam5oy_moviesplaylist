import React, { useRef, useState, useEffect } from 'react';
import "./video.scss";
import video from '../../Assets/video/video.mp4';
import playIcon from '../../Assets/svg/play.svg';
import pauseIcon from "../../Assets/svg/pause.svg";
import { Slider, Stack } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import fullScreen from "../../Assets/svg/iconmonstr-fullscreen-7.svg";

const Video = () => {
    const videoRef = useRef()
    const blockRef = useRef()
    const controlsRef = useRef()
    const playRef = useRef()
    const [play, setPlay] = useState(false)
    const [volume, setVolume] = useState(0)
    const [time, setTime] = useState(0)

    const [videoTime, setVideoTime] = useState("00:00")

    useEffect(() => {
        play ? videoRef.current.play() : videoRef.current.pause()
    }, [play]);

    useEffect(() => {
        videoRef.current.volume = volume / 100
    }, [volume])


    function videoTimeFunc() {
        return `${Math.floor(videoRef.current.duration / 60)} : ${Math.floor(videoRef.current.duration % 60) < 10 ? "0" : ''}${Math.floor(videoRef.current.duration % 60)} / ${Math.floor(videoRef.current.currentTime / 60)} : ${Math.floor(videoRef.current.currentTime % 60) < 10 ? "0" : ''}${Math.floor(videoRef.current.currentTime % 60)}`
    }


    return (
        <div ref={blockRef} className='videoPlayer'>
            <video onTimeUpdate={() => {
                setTime((videoRef.current.currentTime / videoRef.current.duration) * 100);
                setVideoTime(videoTimeFunc())
            }} onClick={() => setPlay(prev => !prev)} ref={videoRef} className='video'>
                <source src={video} type="video/mp4" />
            </video>
            <img ref={playRef} className='play open' src={play ? pauseIcon : playIcon} alt="play" onClick={() => setPlay(prev => !prev)} />
            <div className="controls open" ref={controlsRef}>
                <span className='time'>{videoTime}</span>
                <Stack className='volume' spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown />
                    <Slider className="slider" aria-label="Volume" value={volume} onChange={(event, newValue) => setVolume(newValue)} />
                    <VolumeUp />
                </Stack>
                <Slider className="timeRange" value={time} onChange={(event, newValue) => videoRef.current.currentTime = (newValue / 100) * videoRef.current.duration} />

                <img src={fullScreen} className='fullScreen' onClick={() => blockRef.current.classList.toggle('full')} />
            </div>
        </div>
    );
}

export default Video;
