import React from 'react';
import { stylize } from 'frint-react-styles';

import styles from './styles.css';

const Button = React.createClass({
  displayName: 'Button',

  render() {
    return (
      <button styleName="button">
        {this.props.text}
      </button>
    );
  }
});

export default stylize(styles)(Button);
