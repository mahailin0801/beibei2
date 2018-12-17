import React, { Component } from 'react';
import {HashRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Home from './components/home/home';
import List from './components/list/list';
import My from './components/my/my';
import Order from './components/order/order';

import "./common/css/footer.css";
import store from './store';

//关于 react-redux 的方法的引用
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      <Router>
        	<div>
        			<Switch>
        				<Route path="/home" exact component={Home}/>
        				<Route path="/list"  component={List}/>
        				<Route path="/my"  component={My}/>
        				<Route path="/order"  component={Order}/>
        				<Route Redirect="/" to="/home"/>
        			</Switch>
        			
        			<div id="footer">
        					<ul>
        							<li>
        									<NavLink to="/home">首页</NavLink>
        							</li>
        							<li>
        									<NavLink to="/list">列表</NavLink>
        							</li>
        							<li>
        									<NavLink to="/my">订单</NavLink>
        							</li>
        							<li>
        									<NavLink to="/order">我的</NavLink>
        							</li>
        					</ul>
        			</div>
        	</div>
      </Router>
      </Provider>
    )
  }
}

export default App;
