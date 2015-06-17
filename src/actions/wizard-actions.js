import React from 'react/addons';
import alt from '../alt';

import WizardRepository from '../repositories/wizard-repository';
import HouseStore from '../stores/house-store';

class WizardActions {

  getWizard() {
    const wizard = WizardRepository.get();
    this.actions.updateWizard(wizard);
  }

  updateWizard(wizard) {
    this.dispatch(wizard);
  }

  registerForCourse(course) {
    const wizard = WizardRepository.get();
    const newWizard = React.addons.update(
      wizard, { courses: { $push: [ course ] } }
    );
    WizardRepository.save(newWizard);
    this.actions.registerForCourseSuccess(course);
    this.actions.updateWizard(newWizard);
  }

  registerForCourseSuccess(course) {
    this.dispatch(course);
  }

  registerForCourseFailed(message) {
    this.dispatch(message);
  }

  sortIntoHouse() {
    let randomize = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const wizard = WizardRepository.get();
    if (wizard.house) {
      return;
    }
    const houses = HouseStore.getState().houses;
    const house = houses[ randomize(0, houses.length - 1) ];
    const newWizard = React.addons.update(
      wizard, { house: {$set: house } }
    );
    WizardRepository.save(newWizard);
    this.actions.updateWizard(newWizard);
  }
}

export default alt.createActions(WizardActions);
