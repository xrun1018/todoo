import React, {Component} from "react";

export default class ClassComponent extends Component {
    render() {
      return (
        <div className="ClassComponent">
          Class Component
        </div>
      );
    }
}

export function FunctionComponent() {
    return (
        <div className="FunctionComponent">
        Function Component
        </div>
    );
}
