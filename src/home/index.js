import React, { Component } from 'react'


class Home extends Component {
  render(){
  const style ={
  	homepage:{
  		fontSize:'40px',
  		paddingTop:'50px',
      background: '#ead1d6',
      minHeight: 'calc(100vh)'
  	}
  }
  return (
    <div className='Home'>
      <h1 style={style.homepage}>歡 迎你來
</h1>  
    </div>
    );
  }
}
export default Home;
