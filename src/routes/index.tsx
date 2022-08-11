import * as React from 'react';
import IndexPage from './IndexPage';
import NotFoundPage from './NotFoundPage';
import CardPage from './TestPage';
import TestPage from './CardsPage';
import CardModulePage from './CardModulePage';

export interface IRouteProps {
    path: string,
    element: React.ReactNode,
    items?: IRouteProps[],
}

export const ROUTE_NOT_FOUND = '*';
export const ROUTE_ROOT = '/';

export const ROUTE_TEST = '/test';
export const ROUTE_CARD_MODULE = '/cards/:moduleId/module/:pageNumber';

export const ROUTE_CARD = '/cards';
export const ROUTE_GAME = '/game';

export const publicRoutes: IRouteProps[] = [
    {
        path: ROUTE_NOT_FOUND,
        element: <NotFoundPage />,
    },
    {
        path: ROUTE_ROOT,
        element: <IndexPage />,
    },
    {
        path: ROUTE_CARD,
        element: <CardPage />,
    },
    {
        path: ROUTE_TEST,
        element: <TestPage />,
    },
    {
        path: ROUTE_CARD_MODULE,
        element: <CardModulePage />,
    },
];
