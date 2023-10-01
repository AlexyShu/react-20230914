import styles from './styles.module.css';

export const Button = ({ text, onClick, disabled, styleName, active }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={
                `${styles[styleName]}   
                ${disabled ? styles.disabled : ''} 
                ${active && styleName === 'tab' ? styles.active : ''}
                ${!active && styleName === 'tab' ? styles.notActive : ''}`
        }
            disabled={disabled}
        >
            <span className={styles.text}>{text}</span>
        </button>
    )
}