import classNames from 'classnames';
import styles from './styles.module.css';

export const Button = ({ text, onClick, disabled, styleName, active }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={classNames(
                styles[styleName],
                {[styles.disabled]: disabled,
                [styles.active]: active && styleName === 'tab',
                [styles.notActive]: !active && styleName === 'tab'}
                )}
            disabled={disabled}
        >
            <span className={styles.text}>{text}</span>
        </button>
    )
}
