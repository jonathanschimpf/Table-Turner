import React from 'react'

export default function ProtectedRoute({ children }) {

    const user = false;



    if (user) {
        return (
            <div>
                {children}  
            </div>
        )
    } else {

        return (
            <h1>You must login first!</h1>
        )
    }


}
