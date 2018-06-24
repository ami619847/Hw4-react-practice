import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { updateSelection } from './action-add-model';
// import ModelDetails from './ModelDetails';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1977,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}


class App extends Component {

  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addModel = (event) => {
    event.preventDefault()

    this.props.updateSelection({
      name: event.target.value,
      manufacturer: this.state.manufacturer,
      year: this.state.year,
      origin: this.state.origin
    })
  }

  render() {
    return (
      <div className="App">

        <form onSubmit={this.addModel}>
          <label>
            <select onChange={this.handleChange}>
              <option value="">-- pick a model --</option>
              <option value="Ivel Z3">Ivel Z3 (1969)</option>
              <option value="Bally Astrocade">Bally Astrocade (1977)</option>
              <option value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1977)</option>
              <option value="Commodore 64">Commodore 64 (1982)</option>
            </select>
          </label>
          <input type="submit" value="Add"/>
        </form>
        {/* { this.props.model.map(model =>
          <ModelDetails />) } */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    model: state.model
  }
}

export default connect(mapStateToProps, {updateSelection} )(App)
