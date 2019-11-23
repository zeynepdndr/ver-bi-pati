import React, { Component }  from 'react';
import DatePicker from "react-datepicker";

 
// CSS Modules, react-datepicker-cssmodules.css

 
class CustomDatePicker extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default CustomDatePicker;