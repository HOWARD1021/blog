import React, { Component } from 'react'
import './Post.css'
import {Link} from "react-router-dom";
class Post extends Component {
constructor(){
  super()
  this.state={
    post:[],
    img:[],
  }
}
// componentDidMount : 當 component 實例 instance 建立時 並顯示在 DOM 上面 
// setState  posts 為 json  
componentDidMount(){
  // 可以利用 react router 傳入的值
  // 在render () 跑   console.log(this.props)
  const postId = this.props.match.params.postId
  fetch('https://qootest.com/posts/' + postId)
  .then(response => response.json())
  .then(json => this.setState({
    post:json
  }));
  const hash = this.props.location.hash
  const id = hash.slice(1);
  fetch('https://api.unsplash.com/photos/?client_id=gLUTihYJ7yJzkHV1rKaXhhA65yA1ELgWvkAgkB3SQqY&per_page=30&order_by=newest')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        img: result[id].urls.regular,
      }); 
    }
  )
}

render(){
  const {post,img} =this.state
//  console.log(this.props.history)
  return(
<React.Fragment > 
    <div className='Post__Content'>
    <h1 >Post</h1>
{img ? <img className='article-img' src={img} alt="" /> : <img src="https://reurl.cc/drDEp6" alt="" />}
    <div className = 'Post__Title'>
    <h1 >{post.title&&img  ? post.title:'loading...'  }</h1>
    </div>
    <div className='Post__body'>
    <p>{post.body}</p>
    </div>
    <Link className='Post__button' to='/post'>Back</Link>  
    </div>
    </React.Fragment>
    )
  }
}

export default Post;




