import React, { Component, useState } from "react";

export default function Edit(props) {
  class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editing: false,
      };

      this.newDoB = "";
      this.newEmail = "";
    }

    render() {
      const { cardName, DoB, homeWorld, onEdit } = this.props;
      return (
        <div className="card">
          <div className="card-content">
            <div className="card-name">{cardName}</div>
            <p>
              <span>Birthday:</span>
              {this.state.editing ? (
                <span className="birth-year">{DoB}</span>
              ) : (
                <input
                  type="text"
                  defaultValue={DoB}
                  ref={(node) => {
                    this.newDoB = node;
                  }}
                />
              )}
            </p>
            <p>
              <span>Homeworld:</span>
              {this.state.editing ? (
                <span className="home-world">{homeWorld}</span>
              ) : (
                <input
                  type="text"
                  defaultValue={homeWorld}
                  ref={(node) => {
                    this.newHomeWorld = node;
                  }}
                />
              )}
            </p>
            <div align="center">
              <button
                onClick={() => {
                  this.setState({ editing: true });
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
