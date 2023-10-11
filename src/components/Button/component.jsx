import classNames from 'classnames';
import styles from './styles.module.css';
import {useContext} from 'react';
import {ButtonsContext} from '../../contexts/ButtonsColor.jsx';

export const Button = ({ text, onClick, disabled, styleName, active, type }) => {
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
