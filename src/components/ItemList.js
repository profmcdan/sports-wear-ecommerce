import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import propTypes from "prop-types";

const ItemList = ({ articles }) => {
  return (
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <Item key={el.id} title={el.title} />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  articles: propTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(ItemList);
