import { Component } from "react";

export class ObserverComponent extends Component {
  componentDidMount() {
    this.props.model.addObserver(this);
  }

  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }
  update() {
    throw new Error("update() not implemented");
  }
}
