import React, { Component } from 'react'
import PostItem from './stateless/postItem';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            posts : []
        }
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({
            posts : data
        }));
    }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {
            this.state.posts.map(
                (post,index) => (
                    <PostItem key={index}{...post} />
                )
            )
        }
      </div>
    )
  }
}

export default Posts
