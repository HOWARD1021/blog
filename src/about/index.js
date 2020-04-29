import React, { Component } from 'react'
import styled from 'styled-components'

const Post_About = styled.div`
   background: #f3f3f3;
   min-height: calc(100vh);

`


class About extends Component {
  render(){
    return (
    	<div>
     <Post_About>
      <h1>Post_About</h1>  

    </Post_About>
    </div>
    );
  }
}
export default About;
