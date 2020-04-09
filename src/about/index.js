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
<h4>摳印這個深夜節目協助整 </h4>
<h4>理話題 把 腦袋思緒節錄</h4>
<h4>打進來先空幾拍 等待廣告時間結束</h4>    
<h4>問題先生先說（嗨） 等我說開始別搶拍</h4>
<h4>抓準時機把你接住</h4>
<h4>四散的煙霧 攀附 提問是天賦</h4>
<h4>要怎麽 要 要怎麼保持不墜落</h4>      
    </Post_About>
    </div>
    );
  }
}
export default About;
