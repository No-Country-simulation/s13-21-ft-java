import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { MainLayout, UserLayout } from '../Layouts'

import {
  UsersDataForm,
  OnBoarding,
  Login,
  Register,
  ForgotPassword,
  DashboardUser,
  VirtualCashier,
  Transfer,
  ConfirmTransfer,
  MovementsHistory,
  HistoryDetails,
  CVUUser,
  Help
} from '../Routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    // errorElement: <NotFound />,
    children: [
      // {
      //   index: true,
      //   element: (
      //     <Suspense fallback={<Loader />}>
      //       <Users />
      //     </Suspense>
      //   )
      // },
     
      {
        path: '/Register',
        element: (
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        )
      },
      {
        path: '/',
        element: <OnBoarding />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/ForgotPassword',
        element: <ForgotPassword />
      },
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <UserLayout />
          </Suspense>
        ),
        children: [
          {
            path: '/DashboardUser',
            element: <DashboardUser />
          },
          {
            path: '/Transfer',
            element: <Transfer />
          },
          {
            path: '/ConfirmTransfer',
            element: <ConfirmTransfer />
          },
          {
            path: '/MovementsHistory',
            element: <MovementsHistory />
          },
          {
            path: '/HistoryDetails',
            element: <HistoryDetails />
          },
          {
            path: '/CVUUser',
            element: <CVUUser />
          },
          {
            path: '/VirtualCashier',
            element: <VirtualCashier />
          },
          {
            path: '/UsersDataForm',
            element: <UsersDataForm />
          },
          {
            path: '/Help',
            element: <Help />
          },
        ]
      }

      // {
      //   path: '/Reset-password',
      //   element: (
      //     <Suspense fallback={<Loader />}>
      //       <ResetPassword />
      //     </Suspense>
      //   )
      // }

    ]
  }
])

/*
if you wants to add a new route please create a new component
on the  routes file ./Routes

then

add a new object with the path and element properties

    {
        path: '',
        element: <>
      },

      inside the children propertie.
*/
