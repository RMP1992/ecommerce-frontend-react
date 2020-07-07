import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';
import Orders from './admin/Orders';


const Routes = () => {
    return(
    <BrowserRouter>
        
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            
            <PrivateRoute path='/user/dashboard' exact component={Dashboard} />
            <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
            <AdminRoute path='/create/category' exact component={AddCategory} />
            <AdminRoute path='/create/product' exact component={AddProduct} />
            <AdminRoute path='/admin/orders' exact component={Orders} />
            
            <Route exact path='/product/:productId' component={Product} />
            <Route exact path='/cart' component={Cart} />

        </Switch>
    </BrowserRouter>
    )
}
//BrowserRouter makes props available in the routes
export default Routes;
