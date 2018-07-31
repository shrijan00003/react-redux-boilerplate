import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './stateless/postItem';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/PostActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts(); //calling action
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.posts.map((post, index) => (
          <PostItem key={index} {...post} />
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
