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
// 串接 兩個 api 一個為 留言內容 另一項為 圖片
componentDidMount() {
    fetch('https://api.unsplash.com/photos/?client_id=gLUTihYJ7yJzkHV1rKaXhhA65yA1ELgWvkAgkB3SQqY&per_page=30&order_by=oldest')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            imgs: result,
          });
          let post_url = '?_sort=id&_order=desc&_limit=30'
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
  const {history} = this.props
  return(
  <div className='Post__Content' >
    {posts.map((post,index) =>(
     <div className = 'Post__item' key={index} 
     onClick = {()=>{
      history.push(`/post/${post.id}#${index}`)}
    }>
      <div  >
{imgs[index] ? <img src={imgs[index].urls.small} alt="" /> : <img src="https://reurl.cc/drDEp6" alt="" />}
       </div>
       <div className='Post__title'>
       {!post.title  ? <div className='Post__title'>無標題</div>:<div className='Post__title'>{post.title}</div>}
        </div>
     </div>      
     ))}
  </div>
    )
  } 
}

export default withRouter(Post_list);




