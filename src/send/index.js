import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // higher older component
import {Link} from "react-router-dom";
// import './Send.css'

import styled from 'styled-components'

// styled-components  改 Inline-style css 
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Container = styled.div`
margin:auto ;
margin-bottom: 50px;
padding:25px;
border:solid;
width:500px;
height:250px;
`
const Post__submit = styled.button`
text-decoration:none;
`

// JS 設定 state 
class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : '',
      body  : '',
    };
  }
// 如果有輸入 名稱 則改動 
handleTitleChange  =(e) =>{
  this.setState({
    [e.target.name] : e.target.value
  })
}

// 輸入後 Fetch POST Api 
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
      <div>
      <Container>
        <h3>Blog Posts</h3>
        
         <div>
         title: 
         <Input placeholder="title" type="text"   name ='title' value = {title} onChange = {this.handleTitleChange}/>
         </div>
        <div className="Post__input">
        body:
         <Input placeholder="body" type="text"name ='body' value ={body} onChange = {this.handleTitleChange}/>
        </div>
        <Post__submit onClick ={this.handleSubmit}>
        <Link   to='/post'>submit </Link>
        </Post__submit> 

      </Container>
      </div>
    );
  }
}

export default Send;