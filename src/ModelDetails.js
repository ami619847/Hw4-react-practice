import React, { PureComponent } from 'react'

export default class ModelDetails extends PureComponent {
  render() {
    return 
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Manufacturer: {this.props.manufacturer}</li>
          <li>Year: {this.props.year}</li>
          <li>Origin: {this.props.origin}</li>
        </ul>
      </div>
  }
}
