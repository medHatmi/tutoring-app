import React from 'react'
import { Redirect, Route } from 'react-router-dom'


export default function PrivateRoute({component:Component,...rest}) {


    return (
        <Route
        {...rest}
        render={props=>{
            
            if(localStorage.getItem('token') && localStorage.getItem('token')!== undefined)
            {
                return <Component {...props} />
                
            
            }else{
            return <Redirect to='/login' />
        
        }
    }}
    />
    )
}
