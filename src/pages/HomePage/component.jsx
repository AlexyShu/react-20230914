import {Link} from 'react-router-dom';
import styles from './styles.module.css';

export const HomePage = () => {

    return (
        <div className={styles.wrapper}>
            <h2>Это проект Шубиной Александры, сделанный с помощью React.</h2>
            <p>Для выбора ресторана нажмите </p>
            <Link to={'restaurants'}>сюда</Link>
        </div>)
}