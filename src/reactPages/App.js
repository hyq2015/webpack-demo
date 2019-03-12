import Loadable from 'react-loadable';
import { Router , Route ,Switch,Link} from "react-router-dom";
import User from './User'
import React,{useState,useEffect } from 'react'
import createBrowserHistory from "history/createBrowserHistory"
const history=createBrowserHistory();
const Loading=()=><div>Loading...</div>;


// const User=Loadable({
//     loader: () => import('./User.js'),
//     loading: Loading
// });
const Home=(props)=>(
    <div>home page</div>
);
function App() {
    return(
        <Router history={history}>
            <div>
                <Link to="/p">link to page p</Link>
                <Switch>
                    <Route exact strict path="/" component={Home}/>
                    <Route path="/p" component={User} />
                </Switch>

            </div>
        </Router>
    )
}
export default App


