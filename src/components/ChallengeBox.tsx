import styles from '../styles/components/challengeBox.module.css'
import {useContext} from 'react'
import {ChallengeContexts} from '../contexts/ChallengesContexts'
import { CountdownContext } from '../contexts/CountdownContext'


export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge  } = useContext(ChallengeContexts)
    const {stopCountdown} = useContext(CountdownContext)
    
    function ChallengeSuccessfuly() {
        completeChallenge()
        stopCountdown()
    }
    function ChallengeFailed() {
        resetChallenge()
        stopCountdown()
    }

    return (
        <div className={styles.challengeboxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            onClick={ChallengeFailed}
                            className={styles.challengeFailledButton}
                        >
                            Falhei
                        </button>
                        <button
                            onClick={ChallengeSuccessfuly}
                            type="button"
                            className={styles.challengeCompletedButton}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (
            <div className={styles.challengeboxDisabled}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img  src="icons/level-up.svg" alt="level Up"/>
                    Avance de level completando desafios.
                </p>
            </div> )}

        </div>
    )
}