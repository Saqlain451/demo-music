import React from 'react'
import './music.css'
import { FaPlay, FaStepBackward, FaStepForward,FaPause } from 'react-icons/fa'
import { useGlobalHook } from '../Hooks/Context'

const Music = ({title, img, artist, music}) => {

const {nextCLickHandler,prevClickHandler,playclickHanlder, isPlay, songDetails, timeUpdate,duration} = useGlobalHook()

  
    return (
        <div className='music-card'>
            <div className="card-title">
                <h1 className="song-title">{title}</h1>
                <h2 className="song-artist">{artist}</h2>
            </div>

            <div className="card-body">
                <div className="song-img">
                    <img src={img} alt="song img" className={isPlay? "anime" : ""} />
                </div>
                <audio ref={songDetails.ref} src={music} onTimeUpdate={timeUpdate}   controls hidden></audio>
                <div className="seekbar">
                    <div className="seekbar-time">
                        <div className="start-time">{duration.curTime}</div>
                        <div className="end-time">{duration.duration}</div>
                    </div>
                    <div className="seekbar-bar">
                        <input type="range" id="progressbar" value={duration.percentage}></input>
                    </div>
                </div>

                <div className="control-buttons">
                    <p id="prev" title="prev" onClick={prevClickHandler}><FaStepBackward /></p>
                    <p id="play" title="pause" onClick={playclickHanlder}> {isPlay? <FaPause/> : <FaPlay/>}</p>
                    <p id="next" title="next" onClick={nextCLickHandler}><FaStepForward /></p>
                </div>
            </div>

        </div>
    )
}

export default Music