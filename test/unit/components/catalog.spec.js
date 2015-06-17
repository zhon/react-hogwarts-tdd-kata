import {expect} from 'chai';
import React from 'react/addons';

import Catalog from '../../../src/components/catalog';
import Course from '../../../src/components/course';


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

  it('renders all courses', () => {
    const catalog = [ {
        id: 'RUN105',
        name: 'Ancient Runes',
        startTime: new Date(0, 0, 0, 13),
        professor: 'Bathsheba Babbling',
        credits: 3,
      }, {
        id: 'AST101',
        name: 'Astronomy',
        startTime: new Date(0, 0, 0, 11),
        professor: 'Aurora Sinistra',
        credits: 3,
      }, {
        id: 'DDA302-10',
        name: 'Defence Against the Dark Arts',
        startTime: new Date(0, 0, 0, 10),
        professor: 'Severus Snape',
        credits: 4,
      },
    ];

    const renderedCatalog = TestUtils.renderIntoDocument(
      <Catalog catalog={catalog}/>
    );

    const courses = TestUtils.scryRenderedComponentsWithType(renderedCatalog, Course);
    expect(courses).to.have.length(3);
  });

});
