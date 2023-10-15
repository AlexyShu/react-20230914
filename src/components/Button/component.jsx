import {useContext} from 'react';
import classNames from 'classnames';
import {ButtonsContext} from '../../contexts/ButtonsColor.jsx';
import styles from './styles.module.css';


export const Button = ({ text, onClick, disabled, styleName, active, type, className, size }) => {
    const { color } = useContext(ButtonsContext);

    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames(
                className,
                styles[size],
                styles[styleName],
                {[styles.disabled]: disabled,
                [styles.active]: active && styleName === 'tab',
                [styles.notActive]: !active && styleName === 'tab',
                [styles.bigBtn]: styleName === 'bigBtn',
                [styles.rainbow]: color === 'rainbow'}
                )}
            disabled={disabled}
        >
            <span className={styles.text}>{text}</span>
        </button>
    )
}
