import * as React from 'react';
import './Button.css';

export interface ButtonProps {
    label: string;
    clickHandler: () => void;
}

export class Button extends React.Component<ButtonProps, object> {

  public render() {
    return (
        <button
            type="button"
            className="btn"
            onClick={this.props.clickHandler}
        >
            {this.props.label}
        </button>
      );
  }
}
