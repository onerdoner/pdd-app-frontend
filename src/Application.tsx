import * as React from 'react';
import {useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './shared/layouts/Layout';
import {IRouteProps, publicRoutes as routes} from './routes';

export default function Application() {
    const getAllRoutes = useCallback(() => {
            const getRoute = (route: IRouteProps) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                >
                    {route.items?.map(routeItem => getRoute(routeItem))}
                </Route>
            );

            return (
                <Routes>
                    {routes.map(route => getRoute(route))}
                </Routes>
            );
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [routes]);

    return (
        <Layout>
            {getAllRoutes()}
        </Layout>
    );
}
