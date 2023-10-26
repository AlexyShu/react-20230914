import {Tab} from '../Tab/component.jsx';

export const Tabs = ({
        restaurantIds,
    }) => {

    return(
        <div>
            { restaurantIds.map((id) =>
                <Tab key={id} id={id} />
            )}
        </div>)
}