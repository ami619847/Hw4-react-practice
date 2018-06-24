import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addModel } from './action-add-model';
// import ModelDetails from './ModelDetails';
import './App.css';

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

  updateSelection = (event) => {
  const name = event.target.value
  const selectedModel = data[name]
    this.setState({
      // [event.target.name]: event.target.value
      model: {
        name: name,
        manufacturer: selectedModel.manufacturer,
        year: selectedModel.year,
        origin: selectedModel.origin
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addModel(this.state.model)
  }

  render() {
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}>
          <label>
            <select onChange={this.updateSelection}>
              <option value="">-- pick a model --</option>
              <option value="Ivel Z3">Ivel Z3 (1969)</option>
              <option value="Bally Astrocade">Bally Astrocade (1977)</option>
              <option value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1977)</option>
              <option value="Commodore 64">Commodore 64 (1982)</option>
            </select>
          </label>
          <input type="submit" value="Add"/>
        </form>
        {/* {this.props.models.map(model =>
          <ModelDetails addModel={this.addModel}/> )} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    model: state.model
  }
}

export default connect(mapStateToProps, { addModel })(App)
