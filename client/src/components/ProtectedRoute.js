import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({
    isAllowed,
    redirectUrl = '/login', // default to /login if no redirectUrl is provided
    children
}) {


    if (!isAllowed) {
        return <Navigate to={redirectUrl} replace />;
    }

    return children ? children : <Outlet />;

}
