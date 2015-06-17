import React from 'react';
import moment from 'moment';

import WizardActions from '../actions/wizard-actions';

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
        <td><a href="#" onClick={this.handleRegisterClick.bind(this)}>Register</a></td>
      </tr>
    );
  }

  handleRegisterClick(event) {
    event.preventDefault();
    WizardActions.registerForCourse(this.props.course);
  }

}
