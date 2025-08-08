//Router Components Definition
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Roots from '../Pages/Roots/Roots';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';
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
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: 'ReadList',
                loader: () => fetch('books.json'),
                Component: ReadList
            },
            {
                path: '/bookDetails/:id',
                loader: () => fetch('books.json'),
                Component: BookDetails
            }

        ]
    },
]);

