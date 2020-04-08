import React, { Component } from 'react'
import {Link,Route} from "react-router-dom";

import './Nav.css'

class Content extends Component{
    render(){
    const {to,children,exact} = this.props        
    return(
        <Route
path= {to}
exact ={exact}
children = {({match})=>(
<li className = {match ? "active": ""}>
 <Link to ={to}>
 {children}
 </Link>
 </li>
           )}
         />
    )
  }
}

class Nav extends Component{
    render(){
        return (            
<nav className ="nav">

<ul className = 'nav__list'>
<h2>Blog</h2>
<Content  exact = {true} to= '/'>
Home
</Content>    
<Content  to = '/about'>
About
</Content>    
<Content  to = "/post">
Post
</Content>    
<Content  to = "/send">
Send Post
</Content>    

</ul>    
</nav>
            )
    }
}

export default Nav;


