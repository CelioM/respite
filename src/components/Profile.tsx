import { useContext } from 'react';
import { ChallengeContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/profile.module.css'

export function Profile() {
    const {level} = useContext(ChallengeContexts)
    return (
    <div className={styles.profileContainer}>
        <img src='https://github.com/CelioM.png' alt='Celio Maciel'/>
        <div>
            <strong>Celio Maciel</strong>
            <p>
                <img src='icons/level.svg'  alt='level'/>
                  {level}
            </p>
        </div>
    </div>
    );
}