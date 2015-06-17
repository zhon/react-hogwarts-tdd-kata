import React from 'react';

export default class Course extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let course = this.props.course;
    if (!course) {
      return null;
    }
    return (
      <tr>
        <td>{course.name}</td>
        <td>{course.professor}</td>
        <td>{course.credits}</td>
        <td>{course.startTime}</td>
      </tr>
    );
  }
}
