import styles from './styles.module.css';

export const User = ({ user }) => {
    return <span className={styles.user}>{user.name} : </span>
};