import {useState, useEffect} from 'react';
import {RestaurantContainer} from '../../components/Restaurant/container.jsx';
import {Layout} from '../../components/Layout/component.jsx';
import {TabsContainer} from '../../components/Tabs/container.jsx';
import {getRestaurants} from '../../redux/entities/restaurant/thunks/get-restaurants.js';
import {useDispatch} from 'react-redux';
import {Outlet} from 'react-router-dom';

export const MainPage = () => {
    // ---thunks--
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch((getRestaurants()));
    }, []);

    return (
        <Layout>
            <TabsContainer />
            <Outlet />
        </Layout>)
}