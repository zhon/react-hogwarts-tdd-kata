import React from 'react';

export default class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let catalog = this.props.catalog || [];
    let course = (catalog.length > 0) ? catalog[0] : null;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Professor</th>
            <th>Credits</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <Course course={course} />
        </tbody>
      </table>
    );
  }
}
