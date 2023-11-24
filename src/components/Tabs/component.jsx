import {Tab} from '../Tab/component.jsx';

export const Tabs = ({
        restaurants,
    }) => {

    return(
        <div>
            { restaurants.map((restaurant) =>
                <Tab key={restaurant.id} restaurant={restaurant} />
            )}
        </div>)
}