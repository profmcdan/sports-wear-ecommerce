import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";
import { addArticle } from "../actions";
import propTypes from "prop-types";

class AddItem extends Component {
  state = {
    title: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv4();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  };
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button className="btnbtn-successbtn-lg" type="submit">
          Save
        </button>
      </form>
    );
  }
}

AddItem.propTypes = {
  addArticle: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(AddItem);
