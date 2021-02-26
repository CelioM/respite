import { close } from 'inspector';
import { useContext } from 'react';
import { ChallengeContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/levelupmodal.module.css'

export function Modal() {
    const {level, closeModal} = useContext(ChallengeContexts)
    return(
    <div className={styles.overlay}>
        <div className={styles.container}>
            <header>{level}</header>
            <strong>Parabéns</strong>
            <p>Você alcançou um novo level.</p>

            <button
            type='button'
            onClick={closeModal}
            >
                <img src='/icons/close.svg' alt='fechar modal'/>     
            </button>
        </div>

    </div>
    );
}