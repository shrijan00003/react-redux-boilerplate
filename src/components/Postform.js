import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/PostActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }
  onChangeValue = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    //call action here
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title :</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChangeValue}
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body :</label>
            <br />
            <textarea
              type="text"
              name="body"
              onChange={this.onChangeValue}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createPost }
)(PostForm);
