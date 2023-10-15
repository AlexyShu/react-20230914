import {Button} from '../Button/component.jsx';
import styles from './styles.module.css';

export const Tabs = ({restaurants, setActiveRestaurant, activeRestaurantId}) => {

    return(
        <div>
            { Object.values(restaurants).map(({ name, id }) =>
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
                />
            )}
        </div>)
}