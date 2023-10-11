import classNames from 'classnames';
import styles from './styles.module.css';

export const Button = ({
      text,
      onClick,
      disabled,
      styleName,
      active,
      size='m',
      className
    }) => {
    return (
            <button
                type='button'
                onClick={onClick}
                className={classNames(
                    styles[size],
                    className,
                    styles[styleName],
                    styleName,
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
