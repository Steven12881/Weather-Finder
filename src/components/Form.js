import React, { Component } from "react";
class Form extends Component {
  state = {
    city: undefined,
    country: undefined
  };

  render(props) {
    return (
      <div>
        <form onSubmit={this.props.sendCityCountry}>
          <input type="text" name="city" placeholder="type city here!" />
          <input type="text" name="country" placeholder="type country here!" />
          <button className="btn btn-success">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
