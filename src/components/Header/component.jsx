import styles from './styles.module.css';
import {useContext} from 'react';
import {ButtonsContext} from '../../contexts/ButtonsColor.jsx';
import {Button} from '../Button/component.jsx';

export const Header = () => {
    const { color, setColor } = useContext(ButtonsContext);

    const changeBtnsStyle = () => {
        if(color === 'default') {
            setColor('rainbow')
        } else {
            setColor('default')
        }
    }

    return (
        <header className={styles.header}>
            <span>My react project</span>
            <Button
                onClick={changeBtnsStyle}
                text={'Поменять цвет кнопок'}
                type={'button'}
                styleName="bigBtn"
                disabled={false}
            />
        </header>
    )
}