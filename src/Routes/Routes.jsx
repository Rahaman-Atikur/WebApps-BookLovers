//Router Components Definition
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Roots from '../Pages/Roots/Roots';
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                // loader: () => fetch('books.json'),
                // loader: () => fetch('books.json'),
                loader: () => fetch('books.json'),
                path: "/",
                Component: Home
            }
        ]
    },
]);

