import React from 'react';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    }, () => console.log(input))
  }

  addToList(input) {
    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ''
    })
  }

  render() {
    return (
      <div className="to-do-list-main">
        <input onChange={(e) => {
          console.log(e.target.value);
          this.changeUserInput(e.target.value);
        }
        } value={this.state.userInput} type="text"></input>
        <button onClick={() => this.addToList(this.state.userInput)}>Press Me</button>

        <ul>
          {this.state.list.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    )
  }

}