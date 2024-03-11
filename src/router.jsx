import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';
import Characters from './Pages/Characters';
import ErrorPage from './Pages/ErrorPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about/",
                element: <AboutPage />
            },
            {
                path: "characters/",
                element: <Characters />
            }
        ],
        errorElement: <ErrorPage />
    }
])

export default router;