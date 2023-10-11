import classNames from 'classnames';
import styles from './styles.module.css';

export const Header = ({className}) => {
    return (
        <header className={classNames(className, styles.header)}>My react project</header>
    )
}