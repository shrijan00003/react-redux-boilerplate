import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';
import TodoItem from '../components/stateless/TodoItem';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state ={
      pageSize : '',
      query : ''
    }
  }
  componentWillMount() {
    this.props.fetchTodos(); //calling action fetchTodos
  }
  
  onChangeHandler=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentWillReceiveProps(nextProps){
    console.log(this.props)
  }
  
  render() {
    return (
      <div>
        <h1>All Todos</h1>
        <div className="todo-search-row">
            <select className ="s-page-size" name="pageSize" onChange={this.onChangeHandler}>
              <option value="">All</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
            <input type ="text" className="i-search-query" name="query" onChange={this.onChangeHandler}/>
        </div>
        <table>
          <caption></caption>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Titles</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.todos.map(
                (todo, index) => (
                  <TodoItem key={index} {...todo} />
                )
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

Dashboard.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos.allTodos,
  filter : state.todos.filters
})
export default connect(mapStateToProps, { fetchTodos })(Dashboard);