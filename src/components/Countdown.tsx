import styles from '../styles/components/countdown.module.css'
import React,{useState,useEffect, useContext} from 'react'
import { CountdownContext } from '../contexts/CountdownContext'


export function Countdown() {
    const {minutes, seconds, hasFinished,stopCountdown,countdownStart,active} = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('')


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

            {hasFinished ? (
                <button 
                disabled
                className={styles.startCountdown}
                >
                    Ciclo encerrado
                </button> 
            ) : (
            <>    
            {active ? (
                <button 
                type='button' 
                className={`${styles.startCountdownActive} ${styles.startCountdown}`}
                onClick={stopCountdown}
                >
                    Abandonar ciclo
                </button>

            ) : (

                <button 
                type='button' 
                className={styles.startCountdown}
                onClick={countdownStart}
                >
                    Iniciar um ciclo
                </button>
           
            )}
            </>
            )}
        </div>



    );
}