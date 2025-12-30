import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { useCustomRouter } from './context/CustomRouter/CustomRouterContext';
import PageWrapper from './components/Route/PageWrapper';
import Layout from './Layout';
const Home = lazy(() => import('./Pages/Home/Home'));

const AppRoutes = () => {
    const { customPathname } = useCustomRouter();

    const AllRoutes = [
        {
            path: "/",
            component: <Home />,
        },
    ];

    return (
        <div className="main-wrapper">
            <Suspense fallback={<div className="loader"></div>}>
                <Routes location={{ pathname: customPathname }}>
                    <Route element={<Layout />}>
                        {AllRoutes.map((page, index) => (
                            <Route
                                path={page.path}
                                element={
                                    <PageWrapper key={customPathname}>
                                        {page.component}
                                    </PageWrapper>
                                }
                                key={index}
                            />
                        ))}
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRoutes;
