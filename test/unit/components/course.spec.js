import React from 'react/addons';
import {expect} from 'chai';

import Course from '../../../src/components/course';


const TestUtils = React.addons.TestUtils;

describe('course component', () => {

  let course = {
    id: 'RUN105',
    name: 'Ancient Runes',
    startTime: new Date(0, 0, 0, 11, 30),
    professor: 'Bathsheba Babbling',
    credits: 3,
  };

  it('renders a course', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
      <table>
        <tbody>
          <Course course={course}/>
        </tbody>
      </table>
    );
    const courses = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'td');
    expect(courses[0].getDOMNode().textContent).to.equal('Ancient Runes');
  });

  it('renders time correctly', () => {
    const renderedCourse = TestUtils.renderIntoDocument(
      <table>
        <tbody>
          <Course course={course}/>
        </tbody>
      </table>
    );
    const data = TestUtils.scryRenderedDOMComponentsWithTag(renderedCourse, 'td');
    expect(data[3].getDOMNode().textContent).to.equal('11:30 am');
  });

});
