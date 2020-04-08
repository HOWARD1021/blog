import React from 'react'
import './App.css';
import Nav from './nav'; 
import About from './about'; 
import Home from './home';
import Post from './post';
import Post_list from './post_list';
import Send from './send';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



// 設定用來判斷 路由的 tab
// 使用 window.location.hash 可以獲得現在的 #hashtag 字元  
function App(props) {
    return (
     <Router>
    <div className='App'>
    <Nav/>
    <div className='page'> 
<Switch>
<Route exact path="/" component={Home}/>
<Route path="/about" component={About}/>
<Route exact path="/post" component={Post_list}/>
<Route exact path="/post/:postId" component={Post}/>
<Route path="/send" component={Send}/>
</Switch>
    </div>
    </div>
    </Router>
    );
} 
export default App;
