import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './views/Products'
import LayoutEcommerce from './layouts/LayoutEcommerce'
import Ecommerce from './views/Ecommerce'
import NewProduct from './views/NewProduct'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path: 'product/new',
                element: <NewProduct/>
            }
        ],
    },
    {
        path: '/ecommerce',
        element: <LayoutEcommerce />,
        children: [
            {
                index: true,
                element: <Ecommerce/>
            },
        ]
    }
])