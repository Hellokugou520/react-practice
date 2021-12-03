import React, { Component } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addPerson } from "../../redux/actions/person";

class Person extends Component {
  add = () => {
    const name = this.name.value;
    const age = this.age.value;
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj);
    this.name.value = "";
    this.age.value = "";
  };

  render() {
    const { person, count } = this.props;
    return (
      <div>
        <h1>Person组件,Count组件的和为{count}</h1>
        <input
          ref={(el) => (this.name = el)}
          type="text"
          placeholder="请输入姓名"
        />
        &nbsp;
        <input
          ref={(el) => (this.age = el)}
          type="text"
          placeholder="请输入年龄"
        />
        &nbsp;
        <button onClick={this.add}>添加</button>
        <ul>
          {person.map((item) => {
            return (
              <li key={item.id}>
                {item.name}--{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ person: state.personReducer, count: state.countReducer }),
  {
    addPerson,
  }
)(Person);
