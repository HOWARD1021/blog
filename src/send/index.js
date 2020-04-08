import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'; // higher older component
import {Link} from "react-router-dom";
import './Send.css'
class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : '',
      body  : '',
    };
  }

handleTitleChange  =(e) =>{
  this.setState({
    [e.target.name] : e.target.value
  })
}


handleSubmit =() =>{
    const {title , body } = this.state
fetch('https://qootest.com/posts',{
method:'POST',
headers:{
  'Content-Type': 'application/json'
},
body:JSON.stringify({
title:title,
body:body,
author: 'user01'
})
}).then(res => {
    return res.json();   // 使用 json() 可以得到 json 物件
}).then(()=> {console.log('success')
}).catch(()=>{alert('fail')}) 

}

  render() {
    const {title , body } = this.state
    return (
      <div className="container">
        <h3>Blog Posts</h3>
        
        <div className="Post__textarea">
        title:
        <textarea  name ='title' value = {title} onChange = {this.handleTitleChange}/>
        </div>
        <div className="Post__input">
        body:
        <input  name ='body' value ={body} onChange = {this.handleTitleChange}/>        
        </div>
        <button className='Post__submit' onClick ={this.handleSubmit}><Link  className='Post__submit' to='/post'>submit </Link></button> 

      </div>
    );
  }
}

export default Send;