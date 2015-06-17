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

});
