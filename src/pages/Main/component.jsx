import {Layout} from '../../components/Layout/component.jsx';
import {TabsContainer} from '../../components/Tabs/container.jsx';
import {Outlet} from 'react-router-dom';

export const MainPage = () => {

    return (
        <Layout>
            <TabsContainer />
            <Outlet />
        </Layout>)
}