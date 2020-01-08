import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions';
import { dispatch } from 'rxjs/internal/observable/pairs';

const App = props => {

  const removeFeature = feature => {
    props.removeFeature(feature);
  };

  const addFeature = feature => {
    props.addFeature(feature);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={addFeature} />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFeature: feature => dispatch(addFeature(feature)),
    removeFeature: feature => dispatch(removeFeature(feature))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
