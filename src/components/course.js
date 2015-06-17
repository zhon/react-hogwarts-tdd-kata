import React from 'react';
import moment from 'moment';

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
        <td>{moment(course.startTime).format('h:mm a')}</td>
        <td><a href="#">Register</a></td>
      </tr>
    );
  }
}
