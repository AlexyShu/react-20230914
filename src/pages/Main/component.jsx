import {restaurants} from '../../constants/mocks.js';
import {useState} from 'react';
import {Restaurant} from '../../components/Restaurant/component.jsx';
import {Tabs} from '../../components/Tabs/component.jsx'
import  styles from './styles.module.css';
import {Header} from '../../components/Header/component.jsx';
import {Footer} from '../../components/Footer/component.jsx';

export const MainPage = () => {
    const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Tabs restaurants={restaurants} setActiveRestaurant={setActiveRestaurant} activeRestaurantId={activeRestaurantId}/>
                <Restaurant restaurant={restaurants.find(restaurant => restaurant.id === activeRestaurantId )} />
            </div>
            <Footer />
        </>)
}