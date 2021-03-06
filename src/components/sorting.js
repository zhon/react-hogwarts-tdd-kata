import React from 'react';

import SortingHat from './sorting-hat';
import SortingHouse from './sorting-house';
import WizardStore from '../stores/wizard-store';
import HouseStore from '../stores/house-store';
import Alert from './alert';

export default class Sorting extends React.Component {

  constructor(props) {
    super(props);
    this.state = WizardStore.getState();
    this.state.houses = HouseStore.getState().houses || [];
  }

  componentDidMount() {
    this.changeFn = this.onChange.bind(this);
    WizardStore.listen(this.changeFn);
  }

  componentWillUnmount() {
    WizardStore.unlisten(this.changeFn);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    const house = this.state.wizard.house;
    const message = house ? 'You are assigned to ' + house + '!' : null;

    return (
      <div>
        <div className="jumbotron" style={{'padding': '10px'}}>
          <h1>Welcome to Hogwarts, wizard!</h1>
          <p>Welcome to the wonderful world of hogwarts.  Click the sorting hat to discover which house you will be assigned to.</p>
        </div>
        <Alert message={message} />
        <div className="pull-left">
          <SortingHat />
        </div>
        <div className="well pull-left">
          {
            this.state.houses.map( item =>
                <SortingHouse houseName={item} selected={house === item} key={item}/>
              )
          }
        </div>
      </div>
    );
  }
}
