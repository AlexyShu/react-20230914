import {Button} from '../Button/component.jsx';
import {useContext} from 'react';
import {ButtonsContext} from '../../contexts/ButtonsColor.jsx';

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
                    styleName="tab"
                    disabled={false}
                    active={id === activeRestaurantId ?? null}
                    theme={color}
                />
            )}
        </div>)
}