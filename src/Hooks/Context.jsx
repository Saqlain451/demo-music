import React, { useContext, useEffect, useRef, useState } from 'react'
import audioDb from './Data'
// create context hook
const appContext = React.createContext();
const AppProvider = ({ children }) => {

    const myRef = useRef();

    let [songNum, setSongNum] = useState(0)
    const [songDetails, setSongDetails] = useState(
        {
            title: "",
            artis: "",
            img: "",
            audio: "",
            ref: myRef,
        }
    )

    const [duration, setDuration] = useState({
        curTime: 0,
        duration: 4.00,
        percentage: 1,
    })

    const [isPlay, setIsPlay] = useState(false);


    const updateSong = (index) => {
        const { title, artist, img, audio } = audioDb[index];
        setSongDetails({
            title: title,
            artis: artist,
            img: img,
            audio: audio,
            ref: myRef,
        })
    }

    const pauseMusic = () => {
        setIsPlay(false);
        myRef.current.pause();
    }

    const secToMin = (sec) => {
        let min = Math.floor(sec / 60);
        let secRem = Math.floor(sec % 60);
        min = min < 10 ? `0${min}` : `${min}`;
        secRem = secRem < 10 ? `0${secRem}` : `${secRem}`
        return `${min}:${secRem}`;
    }

    const timeUpdate = (e) => {
        setDuration({
            curTime: secToMin(e.target.currentTime),
            duration:  secToMin(e.target.duration),
            percentage: Math.floor((e.target.currentTime / e.target.duration) * 100),
        })
        if (e.target.currentTime === e.target.duration) {
            nextCLickHandler();

        }
    }



    const playMusic = () => {
        setIsPlay(true);
        myRef.current.play();
    }

    





    const nextCLickHandler = () => {
        let songcount = (songNum + 1) % audioDb.length;
        setSongNum(songcount);
        setIsPlay(false)
    }

    const prevClickHandler = () => {
        let songcount = (songNum - 1 + audioDb.length) % audioDb.length;
        setSongNum(songcount);
        setIsPlay(false)
    }




    const playclickHanlder = () => {
        isPlay ? pauseMusic() : playMusic()
    }

    useEffect(() => {
        updateSong(songNum);
    }, [songNum])

    return <appContext.Provider value={{ duration, songDetails, nextCLickHandler, prevClickHandler, timeUpdate, playclickHanlder, isPlay }}>
        {children}
    </appContext.Provider>
}

const useGlobalHook = () => {
    return useContext(appContext);
}

export { useGlobalHook, AppProvider }