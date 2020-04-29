import React, { Component } from 'react'
import './Post_list.css'
import {withRouter} from "react-router-dom";

class Post_list extends Component {
constructor(){
  super()
  this.state={
    posts:[],
    img:[]
  }
}
// 串接 兩個 api 
componentDidMount() {
  //  圖片  
  fetch('https://api.unsplash.com/photos/?client_id=gLUTihYJ7yJzkHV1rKaXhhA65yA1ELgWvkAgkB3SQqY&per_page=30&order_by=newest')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            imgs: result,
          });
          let post_url = '?_sort=id&_order=desc&_limit=30'
   // 留言內容
          fetch('https://qootest.com/posts/'+ post_url)
            .then(res => res.json())
            .then(
              (json) => {
                this.setState({
                  posts: json,
                });
              },
            );
        },
      );
  }



render(){
  const {posts,imgs} =this.state
  // history 為 withRouter 高階函數給予的 (為網址) 
  const {history} = this.props
  return(
  <div className='title_group' >
    {posts.map((post,index) =>(
     <div className = 'article_container' key={index} 
     onClick = {()=>{
    //  React-router-dom 提供的可以換頁的 function  
      history.push(`/post/${post.id}#${index}`)}
    }>
      <div  >
{imgs[index] ? <img className="article_img" src={imgs[index].urls.small} alt="" /> : <img src="https://reurl.cc/drDEp6" alt="" />}
       </div>
       <div className='Posts__title'>
       {!post.title  ? <div className='Post__title'>無標題</div>:<div className='Post__title'>{post.title}</div>}
        </div>
     </div>      
     ))}
  </div>
    )
  } 
}

export default withRouter(Post_list);




