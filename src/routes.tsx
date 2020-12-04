import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import User from './Pages/User';




const Routes: React.FC = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:login" component={User} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
