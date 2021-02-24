import styles from '../styles/components/countdown.module.css'
import React,{useState,useEffect} from 'react'

export function Countdown() {
    const [time, setTime] = useState(25 * 60)
    const [active,setActive] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time%60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('')

    function countdownStart() {
        setActive(true);
    }
    useEffect(() => {
        if(active && time>0) {    
            setTimeout(()=> {
                setTime(time-1);
            },1000)
        } else if(time===0) {
            setActive(false);
            setTime(25*60)
            
        }
    }, [active,time])

    return(
        <div> 
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            <button 
            type='button' 
            className={styles.startCountdown}
            onClick={countdownStart}
            >
                Iniciar um ciclo
            </button>
        </div>



    );
}