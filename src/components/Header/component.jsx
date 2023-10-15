import classNames from 'classnames';
import {useContext} from 'react';
import {ButtonsContext} from '../../contexts/ButtonsColor.jsx';
import {Button} from '../Button/component.jsx';
import styles from './styles.module.css';


export const Header = ({className}) => {
    const { color, setColor } = useContext(ButtonsContext);

    const changeBtnsTheme = () => {
        if(color === 'default') {
            setColor('rainbow')
        } else {
            setColor('default')
        }
    }

    return (
        <header className={classNames(className, styles.header)}>
            <span>My react project</span>
            <Button
                onClick={changeBtnsTheme}
                text={'Поменять цвет кнопок'}
                type={'button'}
                size="l"
                styleName="defaultBtn"
                disabled={false}
            />
        </header>
    )
}