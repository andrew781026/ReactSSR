import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../client/components/Home';
import UserList from '../client/components/UserList';


export default () => {
    return (
        <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/users' component={UserList}/>
            <Route exact path='/hi' component={()=>'Hi'}/>
        </div>
    );
}