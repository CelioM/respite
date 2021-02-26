import {ReactNode, createContext, useState, useEffect} from 'react'
import challenges from  "../../challenges.json"
import Cookies from 'js-cookie'
import { Modal } from '../components/LevelUpModal'


export const ChallengeContexts = createContext({} as ChallengeContextData)

interface ChallengeProviderProps  {
    children: ReactNode;   
    level: number;
    currentExperience:number;
    challengesCompleted:number;
}
interface Challenge {
    type: 'body'| 'eye';
    description:string;
    amount:number;
}
interface ChallengeContextData {
    level:number;
    currentExperience: number;
    challengesCompleted:number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: ()=> void;
    closeModal: () => void;

}

export function ChallengesProvider({children, ...rest}: ChallengeProviderProps) {
        const [level, setLevel] = useState(rest.level ?? 1)
        const [currentExperience,setCurrentExperience] = useState(rest.currentExperience ?? 0)
        const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
        const [activeChallenge, setActiveChallenge] = useState(null)
        const experienceToNextLevel = Math.pow((level + 1)*4, 2)
        const [isLevelUpModalOpen, setLevelUpModal] = useState(false)



        useEffect(() => {
            Notification.requestPermission()
        }, [])

        function resetChallenge() {
            setActiveChallenge(null) 
            
        }
        

        function levelUp() {
            setLevel(level + 1)
            setLevelUpModal(true)
        }
        function closeModal() {
            setLevelUpModal(false)
        }

        function startNewChallenge() {
            const challengesRandonIndex = Math.floor(Math.random() * challenges.length)
            const challenge  = challenges[challengesRandonIndex]

            setActiveChallenge(challenge)

            new Audio('/notification.mp3').play()

            if (Notification.permission === 'granted') {
                new Notification('Novo desafio', {
                    body: `Valendo ${challenge.amount}xp` 
                })
            }
        }
        function completeChallenge() {
            if(!activeChallenge) {
                return;
            }
            const {amount} = activeChallenge
            let finalExperience = currentExperience + amount
            if(finalExperience >= experienceToNextLevel) {
                finalExperience = finalExperience - experienceToNextLevel
                levelUp()
            }
            setCurrentExperience(finalExperience)
            setActiveChallenge(null)
            setChallengesCompleted(challengesCompleted + 1)
        }
        useEffect(()=> {
            Cookies.set('level', String(level))
            Cookies.set('currentExperience', String(currentExperience))
            Cookies.set('challengesCompleted', String(challengesCompleted))

        },[level, currentExperience, challengesCompleted])
        


        return(
            <ChallengeContexts.Provider value={{level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge,
            closeModal
            
            }}>
                {children}
                {isLevelUpModalOpen && <Modal/>}
            </ChallengeContexts.Provider>

        );

}