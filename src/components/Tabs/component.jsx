import {Button} from '../Button/component.jsx';
import {useContext} from 'react';
import {ButtonsContext} from '../../contexts/ButtonsColor.jsx';
import styles from './styles.module.css';

export const Tabs = ({restaurants, setActiveRestaurant, activeRestaurantId}) => {
    const { color } = useContext(ButtonsContext);

    return(
        <div>
            { restaurants.map(({ name, id }) =>
                <Button
                    key={id}
                    type="button"
                    text={name}
                    onClick={() => setActiveRestaurant(id)}
                    disabled={false}
                    active={id === activeRestaurantId ?? null}
                    size="m"
                    styleName="tab"
                    className={styles.tab}
                    theme={color}
                />
            )}
        </div>)
}