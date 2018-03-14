import { Component } from "react";

export class ObserverComponent extends Component {
  componentDidMount() {
    this.model.addObserver(this);
  }

  componentWillUnmount() {
    this.model.removeObserver(this);
  }
  update() {
    throw new Error("update() not implemented");
  }
  get model() {
    return this.props.model;
  }
}
