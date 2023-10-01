import styles from './styles.module.css';

export const Reviews = ({reviews}) => {
    return (<ul>
        { reviews.map(({ user, text, id }) =>
            <li key={id}>
                <span className={styles.user}>{user}: </span>
                <span>{text}</span>
            </li>)
        }
    </ul>)
}