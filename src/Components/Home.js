




import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios'
import {Link }from 'react-router-dom'
import {connect } from 'react-redux'
import images from '../../src/images.png'

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts :[ ]
  //   };
  // }

  // componentDidMount(){
    
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //         .then(res=> {
  //           console.log(res.data.slice(0,10))
  //         this.setState({
  //           posts:res.data.slice(0,10)
  //         })
  // }).catch(
  //     console.error("post not found")
  // )
  
// }
handleClick=(id)=>{
  this.props.deletePost(id)
  this.props.history.push('/')
}

  render() {
    console.log(this.props)
const {posts} = this.props

    // const {posts} = this.state
    const postList = posts.length?(
      posts.map(post=>{
        return(
          <div className="post card" key={post.id}>
          
          <img  src={images} alt="Alt" />
            <div className="card-content">
            <Link to={"/" +post.id}>
            <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
            </div>
            <div className="center">
            <button className="btn grey" onClick={()=>this.handleClick(post.id)} >
            Delete Post
            </button>
            </div>

          </div>
        )
      })
    ):(<div className="center">No posts yet</div>)
    return(
      <div className="container home" >
        <h1 className="center" >Home</h1>
        <div>
        {postList}
        </div>
     </div>
    );
  }
}


const mapStateToProps=(state)=>{
  return {
    posts: state.posts
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    deletePost:(id)=>{dispatch({type:'DELETE_POST',id:id})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)





















// import React, { useState, useEffect } from 'react';

// const Home = () => {
//   const [seconds, setSeconds] = useState(5);

//   useEffect(() => {
      
//     const interval = setInterval(() => {
//       setSeconds(seconds => seconds - 1);
//     }, 1000);
    
//     if(seconds <0){
//         return () => clearInterval(interval);
//         let seconds=0
//         setSeconds(seconds)
//     }

//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         {seconds} seconds have elapsed since mounting.
//       </header>
//     </div>
//   );
// };

// export default Home;