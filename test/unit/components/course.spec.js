import React from 'react/addons';
import {expect} from 'chai';
import sinon from 'sinon';

import Course from '../../../src/components/course';

import WizardActions from '../../../src/actions/wizard-actions';


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

  it('renders a register link', () => {
    const renderedCourse = TestUtils.renderIntoDocument(
      <table>
        <tbody>
          <Course course={course} />
        </tbody>
      </table>
    );
    const data = TestUtils.scryRenderedDOMComponentsWithTag(renderedCourse, 'td');
    expect(data.length).to.equal(5);
    expect(data[4].getDOMNode().textContent).to.equal('Register');
    expect(data[4].props.children.type).equal('a');
  });

  it('calls WizardActions.registerForCourse when the register link is clicked', () => {
    const mockWizardActions = sinon.mock(WizardActions);
    mockWizardActions.expects('registerForCourse').once().withExactArgs(course);
    const renderedCourse = TestUtils.renderIntoDocument(
      <table>
        <tbody>
          <Course course={course} />
        </tbody>
      </table>
    );
    const data = TestUtils.scryRenderedDOMComponentsWithTag(renderedCourse, 'a');
    TestUtils.Simulate.click(data[0]);
    mockWizardActions.verify();
  });

});
