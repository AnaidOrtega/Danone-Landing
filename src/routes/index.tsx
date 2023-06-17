import {
  Home,
  ProductDetails,
  ProductRecommendations,
  Profile,
  Settings,
} from '@pages/index'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/product-details',
    element: <ProductDetails />,
  },
  {
    path: '/product-recommendations',
    element: <ProductRecommendations />,
  },
])
