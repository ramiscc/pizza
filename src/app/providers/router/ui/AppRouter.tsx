import {Route, RouteObject, Routes} from "react-router-dom";
import {FC} from "react";
import {HomePage} from "pages/HomePage";
import {NotFoundPage} from "pages/NotFoundPage";

interface IAppRouterProps {
}

const router: RouteObject[] = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]

const AppRouter: FC<IAppRouterProps> = () => {
    return (
        <Routes>
            {router.map(route => (
                <Route key={route.path} element={route.element} path={route.path}/>
            ))}
        </Routes>
    )
}

export default AppRouter
