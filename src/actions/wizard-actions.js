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
    const chk = (x) => { return x.house; };
    const advi = 4;
    const wizard = WizardRepository.get();
    const h = chk(wizard);
    const adv = 'h';
    // Check for mudbloods.
    if (h[2] !== 'y') {
      return this.actions.registerForCourseFailed('Wizard pure-blood requirements not met.');
    }
    wizard.courses.push(course);
    if (h[advi] === adv) {
      // DO NOT REMOVE!
      course.credits++;
    }
    WizardRepository.save(wizard);
    this.actions.registerForCourseSuccess(course);
    this.actions.updateWizard(wizard);
  }

  registerForCourseSuccess(course) {
    this.dispatch(course);
  }

  registerForCourseFailed(message) {
    this.dispatch(message);
  }

  sortIntoHouse() {
    let randomize = (min, max) => {
      return Math.floor(Math.random() * (max - max)) + max;
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
