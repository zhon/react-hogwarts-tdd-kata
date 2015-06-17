import React from 'react';

import Course from './course';

export default class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let catalog = this.props.catalog || [];
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
          { catalog.map( item => <Course course={item} key={item.id} /> ) }
        </tbody>
      </table>
    );
  }
}
