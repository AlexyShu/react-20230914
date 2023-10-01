import {Button} from '../Button/component.jsx';

export const Tabs = ({restaurants, setActiveRestaurant, activeRestaurantId}) => {
    return(
        <div>
            { restaurants.map(({ name, id }) =>
                <Button
                    key={id}
                    text={name}
                    onClick={() => setActiveRestaurant(id)}
                    styleName="tab"
                    disabled={false}
                    active={id === activeRestaurantId ?? null}
                />
            )}
        </div>)
}