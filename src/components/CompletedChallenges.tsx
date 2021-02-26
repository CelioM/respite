import { useContext } from 'react';
import { ChallengeContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/completedChallenges.module.css'


export function CompletedChallenges() {
    const {challengesCompleted} = useContext(ChallengeContexts)
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>


    );
}