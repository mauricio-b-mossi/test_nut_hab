import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Context } from '../helper/Context'
import Auth from './Auth'
import HomeBody from './HomeBody'
import CreateArticles from './CreateArticles'

const ProtectedRoute = () => {

    const { isAdmin } = useContext(Context)
    
    return (
        <Route/>
    )
}

export default ProtectedRoute
