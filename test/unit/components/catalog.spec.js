import {expect} from 'chai';
import React from 'react/addons';

import Catalog from '../../../src/components/catalog';


const TestUtils = React.addons.TestUtils;

describe('Catalog component', () => {

  it('renders html headers', () => {
    const catalog = TestUtils.renderIntoDocument(
      <Catalog />
    );
    const titles = TestUtils.scryRenderedDOMComponentsWithTag(catalog, 'th');
    expect(titles[0].getDOMNode().textContent).to.equal('Class');
    expect(titles[1].getDOMNode().textContent).to.equal('Professor');
    expect(titles[2].getDOMNode().textContent).to.equal('Credits');
    expect(titles[3].getDOMNode().textContent).to.equal('Time');
  });

  it('renders a course', () => {
    const catalog = [ {
        id: 'RUN105',
        name: 'Ancient Runes',
        startTime: new Date(0, 0, 0, 11, 30),
        professor: 'Bathsheba Babbling',
        credits: 3,
     } ];
    const renderedCatalog = TestUtils.renderIntoDocument(
      <Catalog catalog={catalog}/>
    );
    const courses = TestUtils.scryRenderedDOMComponentsWithTag(renderedCatalog, 'td');
    expect(courses[0].getDOMNode().textContent).to.equal('Ancient Runes');
  });

});
