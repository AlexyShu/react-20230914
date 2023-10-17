import {Tab} from '../Tab/component.jsx';

export const Tabs = ({
        activeRestaurantId,
        setActiveRestaurant,
        restaurantIds,
    }) => {

    return(
        <div>
            { restaurantIds.map((id) =>
                <Tab key={id} id={id} setActiveRestaurant={setActiveRestaurant} activeRestaurantId={activeRestaurantId} />
            )}
        </div>)
}