import styles from '../styles/components/profile.module.css'

export function Profile() {
    return (
    <div className={styles.profileContainer}>
        <img src='https://github.com/CelioM.png' alt='Celio Maciel'/>
        <div>
            <strong>Celio Maciel</strong>
            <p>
                <img src='icons/level.svg'  alt='level'/>
                Level 1
            </p>
        </div>
    </div>
    );
}