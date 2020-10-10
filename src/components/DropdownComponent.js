import React from "react";
import '../styling/Dropdown.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
 
const options = [
    'breakfast', 'lunch', 'dinner', 'dessert'
  ];
  const defaultOption = options[0];

class DropdownComponent extends React.Component {

    render = () => {
        return (
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        )
    }
}

export default DropdownComponent
