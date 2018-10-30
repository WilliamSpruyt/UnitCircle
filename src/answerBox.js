import React from "react";
 
//import { FormControl } from "react-bootstrap";
export default class AnswerBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
        { value: event.target.value }
       
    );
    this.props.handleChange(
      
    );
  }

  render() {
    
      return (
        <form
             
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          >
        </form>
      );
    }  
}