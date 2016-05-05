import React from 'react';

import WizardActions from '../actions/wizard-actions';

import sorting_hat_img from "../../img/sorting-hat.jpg";

export default class SortingHat extends React.Component {

  onSortingRequested() {
    WizardActions.sortIntoHouse();
  }

  render() {
    return (
      <img src={sorting_hat_img} onClick={this.onSortingRequested}></img>
    );
  }
}
