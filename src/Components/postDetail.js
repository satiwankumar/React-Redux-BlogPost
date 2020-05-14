import React, { Component } from 'react';
import axios from 'axios'
import {connect } from 'react-redux'

class postDetail extends Component {
//   constructor(props) {
//     super();

//     this.state = {
//       id: '',
//         postsArray:null
    
//     };
//   }

//   componentDidMount() {

//     let id = this.props.match.params.post_id;
//     console.log(id)

//     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
//       .then((res) => {
//      console.log(res)
//         this.setState(
//             {postsArray :res.data}
//         )
//       })
      
//   }

  render() {

    console.log(this.props)
    const {postD} = this.props
      console.log("postsDetail here ")
      console.log(postD)

    const postDetail = postD ? (
            <div className="post">
            <div>
            <h4 className="center">{postD.title}</h4>
            </div>
             <p>{postD.body}</p>
            </div>
        
    ):(
        <div className="Center">Loading Post . . .</div>
    )

    return (
      <div className="container">
        {postDetail}
      </div>
    );
  }
}

const mapStateToProps=(state,ownProps)=>{
    let id = ownProps.match.params.post_id

    return {
        postD :state.posts.find(post=>post.id==id)
    }

}

export default connect(mapStateToProps)(postDetail)
