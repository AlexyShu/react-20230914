import classNames from 'classnames';
import styles from './styles.module.css';

export const Button = ({ text, onClick, disabled, styleName, active, type, theme }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames(
                styles[styleName],
                {[styles.disabled]: disabled,
                [styles.active]: active && styleName === 'tab',
                [styles.notActive]: !active && styleName === 'tab',
                [styles.bigBtn]: styleName === 'bigBtn',
                [styles.rainbow]: theme === 'rainbow'}
                )}
            disabled={disabled}
        >
            <span className={styles.text}>{text}</span>
        </button>
    )
}
