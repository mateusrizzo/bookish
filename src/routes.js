import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/search" component={Search}/>
            </Switch>
        </BrowserRouter>
    )
}